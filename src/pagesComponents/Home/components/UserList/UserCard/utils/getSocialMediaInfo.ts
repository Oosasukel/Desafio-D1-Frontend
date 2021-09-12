import { SocialMedias } from 'typings/User';

export const getSocialMediaInfo = (socialMedias: SocialMedias) => {
  return Object.keys(socialMedias).map((key) => {
    const socialMedia: string = socialMedias[key];
    let socialMediaColor: string | undefined;
    let socialMediaUrl: string | undefined;

    if (socialMedia) {
      if (
        socialMedia.startsWith('https://') ||
        socialMedia.startsWith('http://')
      ) {
        socialMediaUrl = socialMedia;
      } else {
        socialMediaUrl = `//${socialMedia}`;
      }
    }

    if (socialMedia) {
      switch (key) {
        case 'instagram': {
          socialMediaColor = '#3f729b';
          break;
        }
        case 'twitter': {
          socialMediaColor = '#00acee';
          break;
        }
        case 'facebook': {
          socialMediaColor = '#39569c';
          break;
        }
        case 'linkedin': {
          socialMediaColor = '#0e76a8';
          break;
        }
      }
    }

    return {
      url: socialMediaUrl,
      color: socialMediaColor,
      key,
    };
  });
};
