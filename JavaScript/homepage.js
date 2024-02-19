"use strict"

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul class="navbar">
                    <img class="logo" src="homepage_images/logo3.png" alt=""></img>
                     <a href="index.html">Home</a>
                     <a href="men.html">Mens</a>
                     <a href="women.html">Women</a>
                     <a href="children">Children</a>
                     <a className="signIn">Sign In</a>
                     <a className="cart">Cart</a>
                </ul>
            </nav>
        );
    }
}



class ShoppingSection extends React.Component{
    render(){
        return(
            <div>
                <h1 class="shop">Shop Now</h1>
                <div className="threeDivs">
                    <div class="select">
                        <img class="men" src="homepage_images/men.jpg" alt=""></img>
                        <h1>Shop men</h1>
                        <a href="men.html" ><button>Mens T-shirts</button></a>
                    </div>
                    <div class="select">
                        <img class="women" src="homepage_images/women.jpg"></img>
                        <h1>Shop women</h1>
                        <a href="women.html"><button>Womens T-shirts</button></a>
                    </div>
                    <div class="select">
                        <img class="children" src="homepage_images/children.jpg"></img>
                        <h1>Shop children</h1>
                        <a href="children.html"><button>Childrens T-shirts</button></a>
                    </div>
                </div>
            </div>
        );
    }
}



class WhatsNew extends React.Component{
    render() {
        return(
            <div>
                <h1 class="whatsNew">Whats New</h1>
                <div class="whats_new">
                        <div class="whatsNewItems">
                            <img class="tshirtOne" src="tshirt_Images/t_shirt1.jpg" alt=""></img>
                            <a class="tshirtLinks" href="">Regular Fit Cotton rugby shirt</a>
                        </div>
                        <div class="whatsNewItems">
                            <img class="tshirtTwo" src="tshirt_Images/t_shirt2.jpg" alt=""></img>
                            <a class="tshirtLinks" href="">Regular Fit Cotton rugby shirt</a>
                        </div>
                        <div class="whatsNewItems">
                            <img class="tshirtThree" src="tshirt_Images/t_shirt2.jpg" alt=""></img>
                            <a class="tshirtLinks" href="">Regular Fit Cotton rugby shirt</a>
                        </div>
                        <div class="whatsNewItems">
                            <img class="tshirtFour" src="tshirt_Images/t_shirt3.jpg" alt=""></img>
                            <a class="tshirtLinks" href="">Regular Fit Cotton rugby shirt</a>
                        </div>
                </div>
            </div>
        );
    }
}



class Ecommerce extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>,
                <ShoppingSection/>
                <WhatsNew/>
            </div>
        );
    }
}