export type Link = { label: string; url: string };
export type Entry = { title: string; place: Link; detail: string; notes?: string[] };

export const experience: Entry[] = [
    {
        title: 'Frontend Developer',
        place: { label: 'Axoma', url: 'https://www.axoma.tech' },
        detail: 'oct 2023 – now · São Paulo',
        notes: ['Formerly SMT Code.', 'Building features and maintaining PlaybookUX, an international research SaaS.'],
    },
    {
        title: 'Front-end Developer',
        place: { label: 'Magazord Digital Commerce', url: 'https://www.magazord.com.br' },
        detail: 'nov 2021 – sep 2023 · Rio do Sul',
        notes: ['Rebuilt features in React and built pages from Figma designs.', 'Handled support tickets.'],
    },
    {
        title: 'Front-end Developer',
        place: { label: 'Rota Seguros', url: 'https://www.rotaseguros.com.br' },
        detail: 'aug 2021 – oct 2021 · Belo Horizonte',
        notes: ['Made websites and landing pages faster and mobile-friendly.'],
    },
];

export const education: Entry[] = [
    {
        title: 'Systems Analysis and Development',
        place: { label: 'UNOPAR', url: 'https://www.unopar.com.br/' },
        detail: 'online · 2021 – 2022',
    },
    {
        title: 'MBA in Controlling and Finance',
        place: { label: 'Centro Universitário Barão de Mauá', url: 'https://baraodemaua.br/' },
        detail: 'online · 2018 – 2019',
    },
    {
        title: 'Bachelor in Accounting',
        place: { label: 'UENP', url: 'https://uenp.edu.br/' },
        detail: 'Cornélio Procópio · 2014 – 2017',
    },
];

export const projects: Entry[] = [
    {
        title: 'Yotei',
        place: { label: 'github.com/bzenky/yotei', url: 'https://github.com/bzenky/yotei' },
        detail: 'VS Code theme',
        notes: ['A purple-red dawn sky, named after Mount Yōtei in Hokkaido.', 'Also for Chrome, Firefox and Slack.'],
    },
    {
        title: 'Pomo Pomodoro',
        place: { label: 'pomopomodoro.com', url: 'https://www.pomopomodoro.com/' },
        detail: 'focus timer',
        notes: ['A Pomodoro timer paired with lo-fi live streams.'],
    },
];
