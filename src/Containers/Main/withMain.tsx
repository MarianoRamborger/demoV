import { useCtxValue } from "../../Context/context"

const withMain = Component  => props => {
    const [context] : any = useCtxValue()

    const mainActions = {
        context,
        ...props,
        
    }

    return <Component {...mainActions} />
}

export default withMain