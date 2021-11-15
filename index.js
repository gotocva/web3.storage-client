
const process = require('process');
const minimist = require('minimist');
const { Web3Storage, getFilesFromPath } = require('web3.storage');

async function init () {

  const token = 'API_TOKEN_FROM_WEB3.STORAGE'

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  const storage = new Web3Storage({ token })
  const files = []

  
  const pathFiles = await getFilesFromPath('sample.txt')
  files.push(...pathFiles)

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
}

init()