import { FC } from "react";

const ChildInformation : FC = () : JSX.Element => {

    return (
        <div className="resell-information">
            <div className="nameservers">
                <p className="font-medium">Please change nameservers to:</p>
                <ul>
                    <li>ns1.perfectdns.com</li>
                    <li>ns2.perfectdns.com</li>
                </ul>
            </div>

            <div className="order">
                <div className="order-top">
                    <h4 className="text-lg font-semibold tracking-wider">
                        Apply Resell Panel
                    </h4>
                </div>
                <div className="order-content">
                    <p>
                        You can sell <b>growsmmpanel.com</b> services to your customers by setting up your own panel. You can earn income from this sale. If you want to start your own business with affordable costs, don't miss this opportunity and fill out the form right next to it!
                    </p>

                    <p>
                        The phrase <b>growsmmpanel.com</b> will never be used on the site that belongs to you, you will have a panel that is entirely your own brand.
                    </p>

                    <div>
                        <p>
                            FAQ
                        </p>
                        <p>
                            Q: Do I need technical knowledge to operate a Child Panel?
                        </p>
                        <p>
                            A: Not at all! We handle the technical side, including hosting and security. You only need to focus on your business.
                        </p>
                    </div>

                    <div>
                        <p>
                            Q: How long does it take to set up my Child Panel?
                        </p>
                        <p>
                            A: Your panel will be up and running within 24-48 hours after you update your DNS settings.
                        </p>
                    </div>
                    
                    <div>
                        <p>
                            Q: Are there any hidden fees?
                        </p>
                        <p>
                            A: There are no hidden fees. The monthly cost is $25, covering hosting, security, and other essential services.
                        </p>
                    </div>

                    ​​<div>
                        <p>
                            Q: Can I choose any domain name?
                        </p>
                        <p>
                            A: You can choose any available domain name that suits your brand, only thing that you should be aware, you can not use any registered trademark name.
                        </p>
                    </div>
                    
                    ​​<div>
                        <p>
                            Q: How can I change name server for my domain?
                        </p>
                        <p>
                            A: Its actually depend on your domain provider, if you go to your domain settings and choose custom DNS and enter the name server given by MoreThanPanel.
                        </p>
                    </div>
                    
                    ​​<div>
                        <p>
                            Q: How to i connect child panel with MoreThanPanel?
                        </p>
                        <p>
                            A: You can simply go to https://yourdomain.com/admin/settings/providers and you will find out option to connect your panel with MoreThanPanel. You can a key to connect your panel with MoreThanPanel. This key you will find out on settings of your MoreThanPanel account.
                        </p>
                    </div>
                    
                    ​​<div>
                        <p>
                            Q: How can i get refund for child panel if i am not interested to continue?
                        </p>
                        <p>
                            A: Unfortunately refund not possible after we activate your child panel. But you can terminate your child panel any time by creating a ticket to us.
                        </p>
                    </div>
                    
                    ​​<div>
                        <p>
                            Q: How can i activate affiliate on my child panel?
                        </p>
                        <p>
                            A: Unfortunately, there is no affiliate feature on child panel.
                        </p>
                    </div>
                    
                    <div>
                        <p>
                            Q: How can i add payment gateway on our child panel?
                        </p>
                        <p>
                            A: You can visit https://yourdomain.com/admin/settings/payments - Add method - Choose Payment Method
                        </p>
                    </div>
                    
                    ​<div>
                        <p>
                            Q: If I connect our child panel with MoreThanPanel, is there any way customer will find out about MoreThanPanel?
                        </p>
                        <p>
                            A: No, your customer will never know about MoreThanPanel. They will place order on your website and your order will automatically place to MoreThanPanel under your user account.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChildInformation;