export type Link = { label: string; url: string };
export type Entry = { title: string; place: Link; detail: string; notes?: string[] };

export const experience: Entry[] = [
    {
        title: 'Frontend Developer',
        place: { label: 'Axoma', url: 'https://www.axoma.tech' },
        detail: 'formerly SMT Code · oct 2023 – now · São Paulo',
        notes: [
            'Active involvement in the PlaybookUX project.',
            'Development of new website features and functionalities, focusing on improving user experience and meeting project-specific requirements through effective implementation of solutions.',
            'Ongoing maintenance of existing websites, including applying updates, implementing fixes, and making improvements to ensure optimal functionality and performance.',
        ],
    },
    {
        title: 'Front-end Developer',
        place: { label: 'Magazord Digital Commerce', url: 'https://www.magazord.com.br' },
        detail: 'nov 2021 – sep 2023 · Rio do Sul',
        notes: [
            'Recreated and maintained existing features in React.',
            'Actively participated in the development, redesign, and creation of pages based on Figma prototypes.',
            'Developed new functionalities and features for websites, collaborating with design and development teams to implement solutions that improve user experience and meet project-specific requirements.',
            'Conducted ongoing maintenance of existing websites, including applying updates, fixes, and enhancements to ensure optimal functionality and performance.',
            'Handled support tickets, comprehended and promptly resolved user requests accurately.',
        ],
    },
    {
        title: 'Front-end Developer',
        place: { label: 'Rota Seguros', url: 'https://www.rotaseguros.com.br' },
        detail: 'aug 2021 – oct 2021 · Belo Horizonte',
        notes: [
            'Developed websites and landing pages.',
            'Maintained and optimized websites for improved performance.',
            'Ensured enhanced usability and user experience across mobile and desktop platforms.',
        ],
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
        title: 'spoti',
        place: { label: 'spoti.bzenky.dev', url: 'https://spoti.bzenky.dev' },
        detail: 'Spotify CLI',
        notes: [
            'Control Spotify playback from your terminal through Spotify Connect.',
            'Local-first, and installs from npm as @bzenky/spoti.',
        ],
    },
    {
        title: 'psnote',
        place: { label: 'psnote.bzenky.dev', url: 'https://psnote.bzenky.dev' },
        detail: 'screenshot annotation',
        notes: [
            'Paste a screenshot, mark it up with arrows, text and redactions, and copy it back.',
            'Runs entirely in the browser: no accounts, no uploads.',
        ],
    },
    {
        title: 'branch-care',
        place: { label: 'github.com/bzenky/branch-care', url: 'https://github.com/bzenky/branch-care' },
        detail: 'Git CLI',
        notes: [
            'Finds merged and stale Git branches, local and remote, and cleans them up safely.',
            'Previews every deletion and asks first. On npm as @bzenky/branch-care.',
        ],
    },
    {
        title: 'claude-ship',
        place: { label: 'github.com/bzenky/claude-ship', url: 'https://github.com/bzenky/claude-ship' },
        detail: 'Claude Code plugin',
        notes: [
            'Takes one change, from a ticket or a plain request, to a draft pull request.',
            'Plans, builds and checks the work, and stops where a person has to decide.',
        ],
    },
    {
        title: 'charly',
        place: { label: 'charly.bzenky.dev', url: 'https://charly.bzenky.dev' },
        detail: 'avatar to ASCII',
        notes: [
            'Turns an avatar into colored or monochrome ASCII art with a live preview.',
            'Exports PNG or SVG, plus a Markdown snippet for GitHub profiles. All in the browser.',
        ],
    },
    {
        title: 'Yotei',
        place: { label: 'yotei.bzenky.dev', url: 'https://yotei.bzenky.dev' },
        detail: 'theme',
        notes: [
            'A dark theme inspired by a purple and red sky at dawn, named after Mount Yōtei in Hokkaido.',
            'Yotei, Midnight and Dawn variants for VS Code, Zed, Chrome, Firefox, Kitty, Windows Terminal, Slack, Orca and more.',
        ],
    },
    {
        title: 'Pomo Pomodoro',
        place: { label: 'pomopomodoro.com', url: 'https://www.pomopomodoro.com/' },
        detail: 'focus timer',
        notes: [
            'A Pomodoro timer for focus and rest cycles, 25/5/15 minutes by default.',
            'Started as a way to pair focus sessions with lo-fi live streams.',
        ],
    },
];
