export const createImageUrl = ({ folder = '', filename = '', subfolder = '' }) =>
  `https://cig-maketplace.s3.sa-east-1.amazonaws.com/${folder}/${subfolder}/${filename}`
