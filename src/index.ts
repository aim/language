type AIM = {
  version: string
  getVersion: () => void
}

const aim: AIM = Object.create(null)

aim.version = "0.0.1"

aim.getVersion = () => aim.version

export default aim
