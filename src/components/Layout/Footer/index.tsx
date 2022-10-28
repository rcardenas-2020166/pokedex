import { SocialMedia } from '../../SocialMedia';
import * as C from './styles';

export const Footer = () =>
{
    return(
        <div className = 'main-container'>
            <C.Container>
                <C.Copy>
                    <span> Derechos de imagen para Nintendo y Pokemon ®™</span>
                    <span> Datos e imágenes utilizados de API - pokeapi.co</span>
                </C.Copy>
            </C.Container>
        </div>
    )
}