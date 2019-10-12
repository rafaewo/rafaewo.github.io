import React, { Component } from 'react'
import github from '../assets/github.svg'
import './styles.css'

// const [project, setProject] = useState('')

// um component did mount para atualizar o h5?

class Card extends Component {
    render() {
        return (
            <>
                <header className="sans-serif">
                    <div className="mw9 center pa4 pt5-ns ph7-l">
                        <div className='flex'>
                            <img src={github} alt='github' className='w2' />
                            <span className='white f3 fw1 ml3'>ALGUNS PROJETOS QUE FIZ / PARTICIPEI</span>
                        </div>
                        <time className="f6 mb2 pointer white dib ttu tracked"><small>sempre um work in progress</small></time>
                        <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                            <span className="bg-black-60 lh-copy hoveron white pa1 tracked-tight">
                                <span  >brain-app </span>/<span > hackatinder </span>/<span> airCnC </span>/<span> cultu-brasil</span>
                            </span>
                        </h3>
                        {/* <h5 className="f5 fw4 ttu white tracked">descrição do app aqui</h5> */}
                    </div>
                </header>
            </>

        )
    }
}
export default Card