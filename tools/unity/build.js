import { promises as fs } from 'fs';
import path from 'path';

// Function to create symbolic link
const createSymlink = async (target, link) => {
  try {
    // Check if the symlink (or node_modules folder) already exists
    try {
      await fs.stat(link); // This will throw an error if the link doesn't exist
      console.log(`Removing existing node_modules at ${link}`);
      await fs.rm(link, { recursive: true, force: true }); // Remove existing node_modules if present
    } catch (err) {
      if (err.code !== 'ENOENT') throw err; // Ignore error if node_modules doesn't exist
    }

    // Create the symlink
    await fs.symlink(target, link, 'dir');
    console.log(`Successfully created symlink from ${link} to ${target}`);
  } catch (err) {
    console.error(`Failed to create symlink: ${err.message}`);
  }
};

const runBuild = async() => {
  // import { build } from 'vite';
  const {build} = await import('vite');
  const mode = process.argv[2] || 'production'; // e.g., pass "development" or "production"
  const configPath = process.argv[3] ? path.resolve(process.argv[3]) : 'vite.config.js';

  try {
    await build({
      mode: mode,
      configFile: configPath,
      build: {
        outDir: 'dist',
      },
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

(async() => {
  const targetDir = path.resolve('/Users/sarangi/projects/milostudio-ui'); // Path to external node_modules
  const linkDir = path.resolve('./node_modules'); // Path in current project where the symlink will be created
  await createSymlink(targetDir, linkDir);
  await runBuild();
});

// Run the symlink creation

