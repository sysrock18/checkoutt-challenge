import fetch from 'isomorphic-fetch'

const getItems = async () => {
  const response = await fetch('https://my-project-fzpynewkef.now.sh/')
  const data = await response.json()

  return data
}

export default getItems