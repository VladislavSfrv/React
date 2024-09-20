import * as React from 'react'

function HOC(Component) {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        return <Component {...props} />
    }
}

export default HOC;