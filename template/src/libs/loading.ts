// this is singleton, the old way of using context in React
// you can change it to react context API if you want
// but i think its more

type TInstance = {
  show: () => void
  hide: () => void
}

interface ILoadingManager {
  component: TInstance
  register: (instance: TInstance) => void
  unregister: () => void
  show: () => void
  hide: () => void
}

const defaultInstance: TInstance = {
  show: () => {},
  hide: () => {}
}

const LoadingManager: ILoadingManager = {
  component: { ...defaultInstance },

  register(instance) {
    this.component = { ...instance }
  },

  unregister() {
    this.component = { ...defaultInstance }
  },

  show() {
    this.component.show()
  },

  hide() {
    this.component.hide()
  }
}

export default LoadingManager
