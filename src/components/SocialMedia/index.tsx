import * as C from './syles';

import { ReactComponent as LinkedinLogo } from '../../assets/logo-linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/logo-github.svg';
import { ReactComponent as TelegramLogo } from '../../assets/logo-telegram.svg';

export const SocialMedia = () =>
{
    return(
        <C.Container>
            <li>
                <C.Link>
                <LinkedinLogo />
                </C.Link>
            </li>
            <li>
                <C.Link>
                <GithubLogo href = 'https://github.com/rcardenas-2020166' />
                </C.Link>
            </li>
            <li>
                <C.Link>
                <TelegramLogo  />
                </C.Link>
            </li>
        </C.Container>
    )
}