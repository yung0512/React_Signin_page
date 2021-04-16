import React ,{Component,createContext,useState} from 'react'

export const LanguageContext = createContext();

 export function LanguageProvider(props){
    const [language, setLanguage] = useState("spanish")
    const changeLanguage = (e) => setLanguage(e.target.value)
    return(
                     <LanguageContext.Provider value={{language:language,changeLanguage:changeLanguage}}>
                         {props.children}
                     </LanguageContext.Provider>
                 )
 }
















// export class LanguageProvider extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             language:"french"
//         }
//         this.changelanguage = this.changelanguage.bind(this)
//     }
//     changelanguage(e){
//         this.setState({
//             language:e.target.value
//         })
//     }
//     render(){
//         return(
//             <LanguageContext.Provider value={{...this.state,changeLanguage:this.changelanguage}}>
//                 {this.props.children}
//             </LanguageContext.Provider>
//         )
//     }
// }

// export const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props}/>}
//     </LanguageContext.Consumer>
// )
