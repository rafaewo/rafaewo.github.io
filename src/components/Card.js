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
                                <span title='Webapp que utiliza uma API de reconhecimento facial' >brain-app </span>/
                                <a href='https://www.producthunt.com/posts/hackatinder' title='Ferramenta para criação de times para hackathons online' target='_blank' rel='noopener noreferrer'> hackatinder </a>
                                /<span title='Webapp mobile desenvolvido na Semana Omnistack 9.0 junto com a Rocketseat'> airCnC </span>/
                                <a href='https://rafaewo.github.io/cultu-brasil/' title='Projeto para informar o público sobre a diversidade cultural brasileira' target='_blank' rel='noopener noreferrer'> cultu-brasil</a>
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