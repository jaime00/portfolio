import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            Something went wrong / Algo salió mal
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="rounded-full bg-teal-500 px-6 py-2 text-sm text-white hover:brightness-105"
          >
            Try again / Intentar de nuevo
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
