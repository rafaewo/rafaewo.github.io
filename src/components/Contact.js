import React from 'react';
import lnkdin  from '../assets/lnkdin.svg'
import ghub from '../assets/ghub.svg'
import glab from '../assets/glab.svg'
import youtube from '../assets/youtube.svg'
import docs from '../assets/docs.svg'

export default function Contact() {
    return (
        <div className="bg-white tj pa4 ph7-l georgia mw9-l center">
            <p className="f5 f3-ns lh-copy measure georgia">
                Quer trocar uma ideia? Pode chamar:
            </p>
            <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--purple mb4">
                rafaelnogunha@hotmail.com
            </p>
            <p className="f5 f4-ns lh-copy measure mb4">
                Tenho interesse futuro nas seguintes áreas: inteligência artificial (deep learning), realidade virtual / aumentada, empreendedorismo e desenvolvimento mobile. Para contato, sinta-se à vontade para dar um alô em uma das minhas redes sociais.
            </p>
            <div className='flex justify-around items-center'>
                <a href='https://www.linkedin.com/in/rafael-cunha-b37083120/' rel='noopener noreferrer' target='_blank'>
                    <img src={lnkdin} alt='LinkedIn' title='LinkedIn' className='h3' />
                </a>
                
                <a href='https://github.com/rafaewo' rel='noopener noreferrer' target='_blank'>
                    <img src={ghub} alt='GitHub' title='GitHub' className='h3' />
                </a>
                <a href='https://gitlab.com/rafaewo' rel='noopener noreferrer' target='_blank'>
                    <img src={glab} alt='GitLab' title='GitLab' className='h3' />
                </a>
                <a href='https://www.youtube.com/channel/UCujLx642rwODTIDu1hA2AqQ' rel='noopener noreferrer' target='_blank'>
                    <img src={youtube} alt='YouTube' title='YouTube' className='h3' />
                </a>
                <a href='https://docs.google.com/document/d/e/2PACX-1vTixNIKswrH5t_cIJ9WsFtfxzBYAZzKqu5HcFccT4XJkW63CLWZU3XU10a4qac7cFw2OXFQkt483DWB/pub' rel='noopener noreferrer' target='_blank'>
                    <img src={docs} alt='Curriculum Vitae' title='Curriculum Vitae' className='h3' />
                </a>
            </div>
        </div>
    );
}

// Ícones da icons8
// <a target="_blank" href="https://icons8.com.br/icons/set/gitlab">Linha gradiente</a>, <a target="_blank" href="https://icons8.com.br/icons/set/linkedin">LinkedIn</a> e outros ícones por <a target="_blank" href="https://icons8.com.br">Icons8</a>