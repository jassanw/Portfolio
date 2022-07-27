const SendMeEmail = () => {
    return ( 
        <a href="mailto:jlwirth@outlook.com"> 
            <div class="p-6 max-w-xs bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                    <img class="h-12 w-12" src="/sendmail.png" alt="ChitChat Logo"/>
                </div>
                <p class="text-xl font-medium text-black">Send me an email</p>
            </div>
        </a>
    )
}
 
export default SendMeEmail;