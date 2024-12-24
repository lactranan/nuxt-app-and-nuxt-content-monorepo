const fs = require('fs-extra')
const path = require('path')

async function mergeOutputs() {
  const rootDir = process.cwd()
  const outputDir = path.join(rootDir, 'dist')
  const workspaceOutput = path.join(rootDir, 'packages/workspace/dist')
  const contentOutput = path.join(rootDir, 'packages/content/dist')

  // Clear the output directory
  await fs.emptyDir(outputDir)

  // Copy workspace output
  await fs.copy(fs.realpathSync(workspaceOutput), outputDir)

  // Copy content output, merging with workspace output
  await fs.copy(fs.realpathSync(contentOutput), outputDir, { overwrite: true })

  console.log('Successfully merged outputs into dist directory')
}

mergeOutputs().catch(console.error) 