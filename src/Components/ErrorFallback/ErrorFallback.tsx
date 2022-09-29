import { ERRORS } from "../../Constants/errors"

const ErrorFallback = ({
  errorCode,
  className = ""
}) => { 

  const getError = (error) => {
    switch(error) {
      case 408: 
      case 505: 
        return ERRORS.noResp

      case 409: 
        return ERRORS.noData

      default: 
        return ERRORS.generalError
    }
  }

  return <div className={`error-fallback ${className}`}> 
      <p className="error-msg">
        {getError(errorCode)}
      </p>
      <style>
        {`
          .error-fallback {
            display: flex;
            width: 100%;
            height: 100%;
            flex-flow: column wrap;
            align-content: center;
            justify-content: center;

          }
          .error-msg {
            font-size: 20px;
            line-height: 50px;
            margin: 0 30px;
          }
        `}
      </style>
  </div>

}

export default ErrorFallback