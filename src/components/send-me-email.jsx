const SendMeEmail = () => {
    return ( 
        <a href="mailto:jlwirth@outlook.com"> 
            <div className="p-6 max-w-xs bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-12 w-12" src="/sendmail.png" alt="ChitChat Logo"/>
                </div>
                <p className="text-xl font-medium text-black">Send me an email</p>
            </div>
        </a>
    )
}
 
export default SendMeEmail;