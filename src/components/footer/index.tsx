import { SocialMediaLink } from "@/app/_home/SocialMediaLink";

const socialMedias = {
  GITHUB: {
    name: 'GitHub',
    url: 'https://github.com/bzenky',
  },
  LINKEDIN: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bzenky/',
  },
  YOUTUBE: {
    name: 'Youtube',
    url: 'https://www.youtube.com/@_zenky',
  },
}

export function Footer() {
  return (
    <div className="flex items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <SocialMediaLink href={socialMedias.GITHUB.url} name={socialMedias.GITHUB.name} />
      <SocialMediaLink href={socialMedias.LINKEDIN.url} name={socialMedias.LINKEDIN.name} />
      <SocialMediaLink href={socialMedias.YOUTUBE.url} name={socialMedias.YOUTUBE.name} />
    </div>
  );
}