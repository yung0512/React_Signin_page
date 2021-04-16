import React , {useContext} from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import Switch from "@material-ui/core/Switch"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles/navbarStyles"
import {ThemeContext} from "./context/ThemeContext"
import { LanguageContext } from "./context/LanguageContext"

const content = {
    english:{
        search:"Search",
        flag:"🇺🇸"
    },
    french:{
        search:"Chercher",
        flag:"🇫🇷"
    },
    spanish:{
        search:"Buscar",
        flag:"🇪🇸"
    },
    chinese:{
        search:"搜尋",
        flag:"🇹🇼"
    }
} 
function Navbar (props){
    const {classes} = props
    const {isDarkMode , toggleTheme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const {search,flag} = content[language]
    return(
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode?"default":"primary"}>
                <Toolbar>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit"
                    >
                        <span> {flag} </span>
                    </IconButton>
                    <Typography 
                        className={classes.title} 
                        variant="h6" 
                        color="inherit"
                    >
                        APP Title 
                    </Typography>
                    <Switch onChange={toggleTheme}/>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase 
                            placeholder={`${search}...`}
                            classes={{
                                root:classes.inputRoot,
                                input:classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        )
}

// class Navbar extends Component {
//     static contextType = ThemeContext;

//     render(){
//         const {classes} = this.props
//         const {isDarkMode , toggleTheme} = this.context
//         const {language} = this.props.languageContext
//         const {search,flag} = content[language]
//         return(
//             <div className={classes.root}>
//                 <AppBar position="static" color={isDarkMode?"default":"primary"}>
//                     <Toolbar>
//                         <IconButton 
//                             className={classes.menuButton} 
//                             color="inherit"
//                         >
//                             <span> {flag} </span>
//                         </IconButton>
//                         <Typography 
//                             className={classes.title} 
//                             variant="h6" 
//                             color="inherit"
//                         >
//                             APP Title 
//                         </Typography>
//                         <Switch onChange={toggleTheme}/>
//                         <div className={classes.grow}/>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase 
//                                 placeholder={`${search}...`}
//                                 classes={{
//                                     root:classes.inputRoot,
//                                     input:classes.inputInput
//                                 }}
//                             />
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//             )
//     }
// }

export default withStyles(styles)(Navbar); 