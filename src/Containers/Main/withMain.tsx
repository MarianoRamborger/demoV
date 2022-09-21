import { useCtxValue } from "../../Context/context"

const withMain = Component  => props => {
    const [context, dispatch] : any = useCtxValue()

    const testContext = color => { 
        dispatch({
            type: "testContext",
            value: color
        })
    }

    const mainActions = {
        context,
        testContext,
        ...props,
        
    }

    return <Component {...mainActions} />
}

export default withMain