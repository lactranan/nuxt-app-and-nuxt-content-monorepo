const fs = require('fs-extra')
const path = require('path')

async function mergeOutputs() {
  const rootDir = process.cwd()
  const outputDir = path.join(rootDir, 'dist')
  const workspaceOutput = path.join(rootDir, 'packages/workspace/.output/public')
  const contentOutput = path.join(rootDir, 'packages/content/.output/public')

  // Clear the output directory
  await fs.emptyDir(outputDir)

  // Copy workspace output
  await fs.copy(workspaceOutput, outputDir)

  // Copy content output, merging with workspace output
  await fs.copy(contentOutput, outputDir, { overwrite: true })

  console.log('Successfully merged outputs into dist directory')
}

mergeOutputs().catch(console.error) 