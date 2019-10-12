import React from 'react';
import linkedin  from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import yingyang from '../assets/yingyang.svg'
import enso from '../assets/enso.svg'
import cv from '../assets/cv.svg'

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
                Tenho interesse futuro nas seguintes áreas: realidade virtual, empreendedorismo e desenvolvimento mobile. Se tiver alguma ideia pra compartilhar, sinta-se à vontade para dar um alô em uma das minhas redes sociais.
            </p>
            <div className='flex justify-around items-center'>
                <a href='https://www.linkedin.com/in/rafael-cunha-b37083120/' rel='noopener noreferrer' target='_blank'>
                    <img src={linkedin} alt='LinkedIn' title='LinkedIn' className='h3' />
                </a>
                <img src={yingyang} alt='Balance' title='Balance' className='h2' />
                <a href='https://github.com/rafaewo' rel='noopener noreferrer' target='_blank'>
                    <img src={github} alt='GitHub' title='GitHub' className='h3' />
                </a>
                <img src={enso} alt='Vegvisir' title='Vegvisir' className='h2' />
                <a href='https://docs.google.com/document/d/e/2PACX-1vTixNIKswrH5t_cIJ9WsFtfxzBYAZzKqu5HcFccT4XJkW63CLWZU3XU10a4qac7cFw2OXFQkt483DWB/pub' rel='noopener noreferrer' target='_blank'>
                    <img src={cv} alt='Curriculum Vitae' title='Curriculum Vitae' className='h3' />
                </a>
            </div>
        </div>
    );
}