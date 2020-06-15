import React, { Component } from "react";
import { Grid, Button, Image, Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import content from "../../content.js";
import "./style.css";
import Developers from "../../components/Developers";
import PeopleChatting from "../../assets/images/people-chatting.png";
import AllChatDemo1 from "../../assets/gifs/AllChat-demo1.gif";
import AllChatDemo2 from "../../assets/gifs/AllChat-demo2.gif";
import { loadUser } from "../../actions/auth";
import { connect } from 'react-redux';
import { compose } from "redux";


class LandingPage extends Component {

    async componentDidMount() {
        this.props.user || await this.props.loadUser();
    }

    renderWelcome(language) {
        switch (language) {
            case "es":
                return content.welcome.es;
            case "zh":
                return content.welcome.zh;
            case "ar":
                return content.welcome.ar;
            case "fr":
                return content.welcome.fr;
            case "de":
                return content.welcome.de;
            case "hi":
                return content.welcome.hi;
            case "ja":
                return content.welcome.ja;
            case "ko":
                return content.welcome.ko;
            case "ru":
                return content.welcome.ru;
            case "tl":
                return content.welcome.tl;
            case "te":
                return content.welcome.te;
            case "vi":
                return content.welcome.vi;
            default:
                return content.welcome.en;
        }
    }

    renderBring(language) {
        switch (language) {
            case "es":
                return content.bring.es;
            case "zh":
                return content.bring.zh;
            case "ar":
                return content.bring.ar;
            case "fr":
                return content.bring.fr;
            case "de":
                return content.bring.de;
            case "hi":
                return content.bring.hi;
            case "ja":
                return content.bring.ja;
            case "ko":
                return content.bring.ko;
            case "ru":
                return content.bring.ru;
            case "tl":
                return content.bring.tl;
            case "te":
                return content.bring.te;
            case "vi":
                return content.bring.vi;
            default:
                return content.bring.en;
        };
    }

    renderParagraph(language) {
        switch (language) {
            case "es":
                return content.landingpage.es;
            case "zh":
                return content.landingpage.zh;
            case "ar":
                return content.landingpage.ar;
            case "fr":
                return content.landingpage.fr;
            case "de":
                return content.landingpage.de;
            case "hi":
                return content.landingpage.hi;
            case "ja":
                return content.landingpage.ja;
            case "ko":
                return content.landingpage.ko;
            case "ru":
                return content.landingpage.ru;
            case "tl":
                return content.landingpage.tl;
            case "te":
                return content.landingpage.te;
            case "vi":
                return content.landingpage.vi;
            default:
                return content.landingpage.en;
        };
    }

    renderStart(language) {
        switch (language) {
            case "es":
                return content.start.es;
            case "zh":
                return content.start.zh;
            case "ar":
                return content.start.ar;
            case "fr":
                return content.start.fr;
            case "de":
                return content.start.de;
            case "hi":
                return content.start.hi;
            case "ja":
                return content.start.ja;
            case "ko":
                return content.start.ko;
            case "ru":
                return content.start.ru;
            case "tl":
                return content.start.tl;
            case "te":
                return content.start.te;
            case "vi":
                return content.start.vi;
            default:
                return content.start.en;
        };
    }

    renderDemo(language) {
        switch (language) {
            case "es":
                return content.demo.es;
            case "zh":
                return content.demo.zh;
            case "ar":
                return content.demo.ar;
            case "fr":
                return content.demo.fr;
            case "de":
                return content.demo.de;
            case "hi":
                return content.demo.hi;
            case "ja":
                return content.demo.ja;
            case "ko":
                return content.demo.ko;
            case "ru":
                return content.demo.ru;
            case "tl":
                return content.demo.tl;
            case "te":
                return content.demo.te;
            case "vi":
                return content.demo.vi;
            default:
                return content.demo.en;
        };
    }

    renderDemoParagraph(language) {
        switch (language) {
            case "es":
                return content.par.es;
            case "zh":
                return content.par.zh;
            case "ar":
                return content.par.ar;
            case "fr":
                return content.par.fr;
            case "de":
                return content.par.de;
            case "hi":
                return content.par.hi;
            case "ja":
                return content.par.ja;
            case "ko":
                return content.par.ko;
            case "ru":
                return content.par.ru;
            case "tl":
                return content.par.tl;
            case "te":
                return content.par.te;
            case "vi":
                return content.par.vi;
            default:
                return content.par.en;
        };
    }

    renderDemoParagraph2(language) {
        switch (language) {
            case "es":
                return content.par2.es;
            case "zh":
                return content.par2.zh;
            case "ar":
                return content.par2.ar;
            case "fr":
                return content.par2.fr;
            case "de":
                return content.par2.de;
            case "hi":
                return content.par2.hi;
            case "ja":
                return content.par2.ja;
            case "ko":
                return content.par2.ko;
            case "ru":
                return content.par2.ru;
            case "tl":
                return content.par2.tl;
            case "te":
                return content.par2.te;
            case "vi":
                return content.par2.vi;
            default:
                return content.par2.en;
        };
    }

    renderTranslateHeader(language) {
        switch (language) {
            case "es":
                return content.tran.es;
            case "zh":
                return content.tran.zh;
            case "ar":
                return content.tran.ar;
            case "fr":
                return content.tran.fr;
            case "de":
                return content.tran.de;
            case "hi":
                return content.tran.hi;
            case "ja":
                return content.tran.ja;
            case "ko":
                return content.tran.ko;
            case "ru":
                return content.tran.ru;
            case "tl":
                return content.tran.tl;
            case "te":
                return content.tran.te;
            case "vi":
                return content.tran.vi;
            default:
                return content.tran.en;
        };
    }

    renderTranslatePar(language) {
        switch (language) {
            case "es":
                return content.tranpar.es;
            case "zh":
                return content.tranpar.zh;
            case "ar":
                return content.tranpar.ar;
            case "fr":
                return content.tranpar.fr;
            case "de":
                return content.tranpar.de;
            case "hi":
                return content.tranpar.hi;
            case "ja":
                return content.tranpar.ja;
            case "ko":
                return content.tranpar.ko;
            case "ru":
                return content.tranpar.ru;
            case "tl":
                return content.tranpar.tl;
            case "te":
                return content.tranpar.te;
            case "vi":
                return content.tranpar.vi;
            default:
                return content.tranpar.en;
        };
    }


    render() {
        return (
            <>
                <Grid id="landing-container">
                    <Grid.Column width={8}>
                        <Grid container id="inner-landing-container">
                            <Grid.Row centered>
                                <h1 id="welcome">
                                    {this.renderWelcome(this.props.user?.language)}
                                </h1>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column id="header" width={16}>
                                    <h1 id="together">
                                        {this.renderBring(this.props.user?.language)}
                                    </h1>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column id="text1" width={16}>
                                    <h5 id="paragraph">
                                        {this.renderParagraph(this.props.user?.language)}
                                    </h5>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={5}>
                                    {this.props.isLoggedIn ? <Button fluid as={Link} to='/rooms' size="massive" id="get-started">
                                        {this.renderStart(this.props.user?.language)}
                                    </Button> : <Button fluid as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="landing-page-image" alt="people-chatting" src={PeopleChatting} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid id="about-container">
                    <Grid.Column width={8}>
                    <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="landing-page-image" alt="people-chatting" src={PeopleChatting} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Header id="about-header" as="h1">About AllChat</Header>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Header id="about-subheader1" as="h4">
                                    There are many different messaging apps out there, but what if you wanted to talk to someone in France, and don't speak French?
                                    That's where AllChat comes in.
                                    </Header>
                                    <Header id="about-subheader2" as="h4">
                                    AllChat utilizes its built-in API to translate the sender's message into the recipient's native language, allowing for more intuitive international communication. 
                                    Whether its for sealing that important business deal, or discovering that special someone from across the globe, AllChat brings us all closer together.
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid id="demo-container">
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Header as="h1" id="demo-header">{this.renderDemo(this.props.user?.language)}</Header>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Header id="demo-subheader1" as="h4">
                                    {this.renderDemoParagraph(this.props.user?.language)}
                                    </Header>
                                    <Header id="demo-subheader2" as="h4">
                                    {this.renderDemoParagraph2(this.props.user?.language)}
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="chat-gif" alt="chat-gif" src={AllChatDemo1} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid id="translate-demo-container">
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="translate-gif" alt="translate-gif" src={AllChatDemo2} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Header as="h1" id="translate-demo-header">{this.renderTranslateHeader(this.props.user?.language)}</Header>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Header id="translate-demo-subheader" as="h4">
                                {this.renderTranslatePar(this.props.user?.language)}
                                </Header>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <footer id="developers-footer">
                    <Developers user={this.props.user}/>
                </footer>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.currentUser
    }
}

export default compose(
    connect(mapStateToProps, { loadUser }),
)(LandingPage)

//  With AllChat, the language barrier is broken!
// {/* After selecting a room, you can start chatting with people across the world! 
//                                         And if someone sends a message in a language you're not familiar with, you can click the
//                                         "See Translation" toggle to view a translated version of the message in your chosen language. */}
// import React, { Component } from "react";
// import { Responsive, Grid, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// import "./style.css";


// class LandingPage extends Component {

//     render() {
//         // console.log(Responsive.onlyMobile);
//         // // Responsive.onlyComputer.minWidth = 750;
//         // // Responsive.onlyComputer.maxWidth = 750;
//         // console.log(Responsive.onlyComputer)
//         return (
//             <>
//                 <Responsive
//                     {...Responsive.onlyMobile}
//                     as={Grid}
//                     id="landing-container-mobile">
//                     <Responsive
//                         {...Responsive.onlyMobile}
//                         as={Grid.Column}
//                         width={16}>
//                         <Responsive
//                             {...Responsive.onlyMobile}
//                             as={Grid} container
//                             id="inner-landing-container-mobile">
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-mobile">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyMobile}
//                                     as={Grid.Column}
//                                     id="header-mobile" width={16}>
//                                     <h1 id="together-mobile">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-mobile" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive {...Responsive.onlyMobile} as={Grid.Column} id="text1-mobile" width={16}>
//                                     <h5 id="paragraph-mobile">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyMobile}
//                                     as={Grid.Column}
//                                     width={16}>
//                                     <Button fluid as={Link} to='/signup' size="massive" id="get-started-mobile">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 <Responsive
//                     {...Responsive.onlyTablet}
//                     as={Grid}
//                     id="landing-container-tablet">
//                     <Responsive
//                         {...Responsive.onlyTablet}
//                         as={Grid.Column}
//                         width={16}>
//                         <Responsive
//                             {...Responsive.onlyTablet}
//                             as={Grid} container
//                             id="inner-landing-container-tablet">
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-tablet">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyTablet}
//                                     as={Grid.Column}
//                                     id="header-tablet" width={16}>
//                                     <h1 id="together-tablet">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-tablet" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive  {...Responsive.onlyTablet} as={Grid.Column} id="text1-tablet" width={16}>
//                                     <h5 id="paragraph-tablet">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyTablet}
//                                     as={Grid.Column}
//                                     width={8}>
//                                     <Button fluid as={Link} to='/signup' size="massive" id="get-started-tablet">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 <Responsive
//                     {...Responsive.onlyComputer}
//                     as={Grid}
//                     id="landing-container-computer">
//                     <Responsive
//                         {...Responsive.onlyComputer}
//                         as={Grid.Column}
//                         width={8}>
//                         <Responsive
//                             {...Responsive.onlyComputer}
//                             as={Grid} container
//                             id="inner-landing-container-computer">
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-computer">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     id="header-computer" width={16}>
//                                     <h1 id="together-computer">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     id="text1-computer"
//                                     width={16}>
//                                     <h5 id="paragraph-computer">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     width={4}>
//                                     <Button as={Link} to='/signup' size="massive" id="get-started-computer">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                     <Responsive
//                         {...Responsive.onlyComputer}
//                         as={Grid.Column}
//                         width={8}>
//                         <Responsive
//                             {...Responsive.onlyComputer}
//                             as={Grid}
//                             container>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-computer" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 {/* <Responsive
//                 {...Responsive.onlyLargeScreen}
//                 as={Grid}
//                 id="landing-container">
//                 <Responsive
//                     {...Responsive.onlyLargeScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyLargeScreen}
//                         as={Grid} container
//                         id="inner-landing-container">
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <h1 id="welcome">Welcome to AllChat!</h1>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen}
//                                 as={Grid.Column}
//                                 id="header" width={16}>
//                                 <h1 id="together">Bring People Together</h1>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen} 
//                                 as={Grid.Column} 
//                                 id="text1" 
//                                 width={16}>
//                                 <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                 With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen}
//                                 as={Grid.Column}
//                                 width={4}>
//                                 <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//                 <Responsive
//                     {...Responsive.onlyLargeScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyLargeScreen}
//                         as={Grid}
//                         container>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//             </Responsive> */}

//                 {/* <Responsive
//                 {...Responsive.onlyWideScreen}
//                 as={Grid}
//                 id="landing-container">
//                 <Responsive
//                     {...Responsive.onlyWideScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyWideScreen}
//                         as={Grid} container
//                         id="inner-landing-container">
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <h1 id="welcome">Welcome to AllChat!</h1>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen}
//                                 as={Grid.Column}
//                                 id="header" width={16}>
//                                 <h1 id="together">Bring People Together</h1>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen} 
//                                 as={Grid.Column} 
//                                 id="text1" 
//                                 width={16}>
//                                 <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                 With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen}
//                                 as={Grid.Column}
//                                 width={4}>
//                                 <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//                 <Responsive
//                     {...Responsive.onlyWideScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyWideScreen}
//                         as={Grid}
//                         container>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//             </Responsive> */}
//             </>
//         )

//     }
// }

// export default LandingPage;