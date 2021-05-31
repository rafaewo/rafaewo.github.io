import React, { Component } from 'react'
import dev from '../assets/dev.svg'
import './styles.css'

// const [project, setProject] = useState('')

// um component did mount para atualizar o h5?

class Card extends Component {
    render() {
        return (
            <>
                <header className="sans-serif">
                    <div className="mw9 center pa4 pt5-ns ph7-l">
                        <div className='flex flex-row items-center'>
                            <img src={dev} alt='developer' className='w2 mb2' />
                            <span className='white f4 fw1 ml3'>ALGUNS PROJETOS QUE DESENVOLVI</span>
                        </div>
                        <time className="f6 mb2 pointer white dib ttu tracked"><small>sempre um work in progress</small></time>
                        <h3 className="f2 f1-m f-subheadline-l measure-narrow lh-title mv0">
                            <span className="bg-black-60 lh-copy hoveron white pa1 tracked-tight">
                            <a href='https://github.com/rafaewo/cafeteria' title='Aplicação estilo e-commerce feita no expo' target='_blank' rel='noopener noreferrer'> coffee shop </a>/
                                <a href='https://www.producthunt.com/posts/hackatinder' title='Ferramenta para criação de times para hackathons online' target='_blank' rel='noopener noreferrer'> hackatinder </a>
                                /<a href='https://youtu.be/ogRu-JBRoyk' title='Análise de perfis gamers utilizando um modelo de machine learning' target='_blank' rel='noopener noreferrer'> gaming-anxiety </a>/
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