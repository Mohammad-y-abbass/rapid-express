const fs = require('fs').promises;
const path = require('path');
const cliProgress = require('cli-progress');
const colors = require('colors');
const readline = require('readline');
const promptUser = require('./prompt');

async function createDirectoryStructure(projectName) {
  const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  const templateDir = path.join(__dirname, '..', 'template');

  try {
    // Get MONGO_URI from user
    const MONGO_URI = await promptUser();

    const totalSteps = 9; // Total number of steps
    let currentStep = 0; // Current step

    console.log(colors.yellow.bold('Creating directory structure...'));

    bar1.start(100, 0); // Start the progress bar

    // Helper function to update progress
    const updateProgress = () => {
      currentStep++;
      bar1.update(Math.ceil((currentStep / totalSteps) * 100)); // Update progress based on current step
    };

    // Artificial delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Create project directory
    await fs.mkdir(projectName);
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('Project directory created'));

    // Create src directory
    await fs.mkdir(path.join(projectName, 'src'));
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('Source directory created'));

    // Copy index.js
    await fs.copyFile(
      path.join(templateDir, 'index.js'),
      path.join(projectName, 'src', 'index.js')
    );
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('index.js created'));

    // Create config directory
    await fs.mkdir(path.join(projectName, 'src', 'config'));
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('Config directory created'));

    // Create db.js (empty file)
    await fs.copyFile(
      path.join(templateDir, 'db.js'),
      path.join(projectName, 'src', 'config', 'db.js')
    );
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('DB configuration file created'));

    // Create routes, controllers, models, and middleware directories
    await Promise.all(
      ['routes', 'controllers', 'models', 'middleware'].map(async (dir) => {
        await fs.mkdir(path.join(projectName, 'src', dir));
        await delay(100); // Add artificial delay
      })
    );
    updateProgress(); // Update progress

    console.log(colors.green.bold('Directories created'));

    // Copy globalErrorHandler.js
    await fs.copyFile(
      path.join(templateDir, 'globalErrorHandler.js'),
      path.join(projectName, 'src', 'middleware', 'globalErrorHandler.js')
    );
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('Global error handler created'));

    // Create utils directory
    await fs.mkdir(path.join(projectName, 'src', 'utils'));
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('Utils directory created'));

    // Copy apiError.js
    await fs.copyFile(
      path.join(templateDir, 'apiError.js'),
      path.join(projectName, 'src', 'utils', 'apiError.js')
    );
    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('API error file created'));

    // Copy .env
    await fs.writeFile(
      path.join(projectName, '.env'),
      `MONGO_URI=${MONGO_URI}\n
       PORT=9001\n`
    );

    await delay(100); // Add artificial delay
    updateProgress(); // Update progress

    console.log(colors.green.bold('.env file created'));

    bar1.stop(); // Stop the progress bar
    readline.cursorTo(process.stdout, 0);
    readline.moveCursor(process.stdout, 0, 12);
    console.log(colors.green.bold('Directory structure created successfully.'));
   
  } catch (error) {
    console.error(
      colors.red.bold(colors.red.bold('Error creating directory structure:')),
      console.error(error)
    );
    bar1.stop(); // Stop the progress bar in case of error
  }
}

module.exports = createDirectoryStructure;
