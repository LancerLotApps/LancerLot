import IconButton from '@mui/material/IconButton';
import {Facebook, WhatsApp, Twitter, Share} from '@mui/icons-material';
import {Tooltip} from '@mui/material';

const shareParam = {
  twitter: {
    shareUrl: 'https://twitter.com/intent/tweet?url=',
    sdkParam: '',
  },
  whatsapp: {
    shareUrl: 'https://api.whatsapp.com/send?text=',
    sdkParam: '',
  },
  facebook: {
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?url=',
    sdkParam: '&amp;src=sdkpreparse',
  },
}

interface ShareProps{
  url: string; text: string; hashTag: string;
}

type ObjKey = keyof typeof shareParam;

const SocialShare: React.FC<ShareProps> = ({ url, text, hashTag}) => {
  const getShareUrl = (platform: ObjKey) => {
    return `${shareParam[platform]['shareUrl']}${encodeURIComponent(url)}${shareParam[platform]['sdkParam']}`
  }
  const shareOn = (platform: ObjKey) => {
    const _url = `${getShareUrl(platform)} ${encodeURIComponent('\n'+text+' '+hashTag)}`;
    window.open(_url, '_blank');
  };

  return (
    <>
      <Tooltip title={'Share with friends'} placement={'top'} color='secondary'>
        <div>
          <IconButton>
            <Share color={'secondary'}/>
          </IconButton>
          <IconButton onClick={()=>shareOn('twitter')}>
            <Twitter color={'secondary'}/>
          </IconButton>
          <IconButton onClick={()=>shareOn('whatsapp')}>
            <WhatsApp color={'secondary'}/>
          </IconButton>
          <IconButton>
            <div className='fb-share-button' data-href={url} data-layout='' data-size='' >
              <a target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&amp;src=sdkpreparse`} rel='noreferrer'>
                <Facebook color={'secondary'}/>
              </a>
            </div>
          </IconButton>
        </div>
      </Tooltip>
    </>
  );
};

export default SocialShare;
