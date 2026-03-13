const FONT_STACK = "'Selecta', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"

function wabiLogoSvg(color) {
  return `<svg width="86" height="20" viewBox="0 0 86 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#wc)"><path d="M38.7452 19.7062H35.3506L30.9655 5.5292H34.5023L37.1895 15.7361L40.019 5.5292H43.4136L46.384 15.7361L49.0712 5.5292H52.4658L48.0806 19.7062H44.6861L41.7156 9.49926L38.7452 19.7062ZM57.5555 19.99C54.726 19.99 52.463 18.2882 52.463 15.7375C52.463 13.1869 54.3019 11.8819 56.9891 11.485L59.8186 11.0599C60.6669 10.9187 61.5166 10.6348 61.5166 9.64191C61.5166 8.36657 60.2441 7.79882 59.1112 7.79882C57.4132 7.79882 56.2817 8.64904 56.1408 10.3509H52.7462C52.7462 7.23247 55.4334 5.24674 59.1112 5.24674C62.789 5.24674 65.0521 7.23106 65.0521 10.6334V19.7062H61.7984V18.0043C60.8078 19.4223 59.2521 19.9886 57.5555 19.9886V19.99ZM58.2629 17.438C59.9609 17.438 61.6575 16.3039 61.6575 14.3195V13.0442L58.9703 13.4693C57.2723 13.725 55.9999 14.1783 55.9999 15.5963C55.9999 16.8716 57.1314 17.4394 58.2629 17.4394V17.438ZM74.3988 19.99C72.023 19.99 70.4941 18.8559 70.0136 18.0057V19.7076H66.7599V0.425042H70.1545V7.22965C70.5786 6.37942 72.0216 5.24532 74.3973 5.24532C78.3584 5.24532 80.9033 8.36375 80.9033 12.6177C80.9033 17.1541 78.357 19.99 74.3973 19.99H74.3988ZM73.8323 17.1541C76.2363 17.1541 77.5101 15.4522 77.5101 12.6177C77.5101 10.3495 76.2377 8.10953 73.8323 8.10953C71.286 8.10953 70.1545 10.3495 70.1545 12.6177C70.1545 14.8859 71.286 17.1541 73.8323 17.1541ZM84.0188 3.96999C82.8873 3.96999 82.039 3.11977 82.039 1.98567C82.039 0.851565 82.8873 0.00134277 84.0188 0.00134277C85.1503 0.00134277 85.9986 0.851565 85.9986 1.98567C85.9986 3.11977 85.1503 3.96999 84.0188 3.96999ZM85.7168 19.7062H82.3222V5.5292H85.7168V19.7062Z" fill="${color}"/><path d="M7.88825 9.20836C7.88825 7.0249 6.12263 5.25525 3.94413 5.25525C1.76563 5.25525 0 7.0249 0 9.20836C0 11.3918 1.76563 13.1615 3.94413 13.1615C6.12263 13.1615 7.88825 11.3918 7.88825 9.20836Z" fill="${color}"/><path d="M15.7624 9.21691C15.7624 7.03344 13.9968 5.26379 11.8183 5.26379C9.63977 5.26379 7.87415 7.03344 7.87415 9.21691C7.87415 11.4004 9.63977 13.17 11.8183 13.17C13.9968 13.17 15.7624 11.4004 15.7624 9.21691Z" fill="${color}"/><path d="M23.6451 9.20836C23.6451 7.0249 21.8795 5.25525 19.701 5.25525C17.5225 5.25525 15.7568 7.0249 15.7568 9.20836C15.7568 11.3918 17.5225 13.1615 19.701 13.1615C21.8795 13.1615 23.6451 11.3918 23.6451 9.20836Z" fill="${color}"/><path d="M19.6995 16.0469C19.6995 13.8634 17.9338 12.0938 15.7553 12.0938C13.5768 12.0938 11.8112 13.8634 11.8112 16.0469C11.8112 18.2303 13.5768 20 15.7553 20C17.9338 20 19.6995 18.2303 19.6995 16.0469Z" fill="${color}"/><path d="M11.8254 16.0342C11.8254 13.8507 10.0598 12.0811 7.88126 12.0811C5.70276 12.0811 3.93713 13.8507 3.93713 16.0342C3.93713 18.2176 5.70276 19.9873 7.88126 19.9873C10.0598 19.9873 11.8254 18.2176 11.8254 16.0342Z" fill="${color}"/></g><defs><clipPath id="wc"><rect width="86" height="20" fill="white"/></clipPath></defs></svg>`
}

const THEMES = {
  light: {
    bg: '#ffffff',
    card: '#ffffff',
    textPrimary: '#0A0A0A',
    textSecondary: '#525252',
    border: '#D4D4D4',
    btnPrimaryBg: '#171717',
    btnPrimaryText: '#FAFAFA',
    btnSecondaryBg: '#F5F5F5',
    btnSecondaryText: '#0A0A0A',
  },
  dark: {
    bg: '#111111',
    card: '#1a1a1a',
    textPrimary: '#FAFAFA',
    textSecondary: '#A3A3A3',
    border: 'rgba(255,255,255,0.08)',
    btnPrimaryBg: '#FAFAFA',
    btnPrimaryText: '#171717',
    btnSecondaryBg: '#262626',
    btnSecondaryText: '#FAFAFA',
  },
}

function renderHeader(t) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:8px 24px;text-align:center;">
      ${wabiLogoSvg('#737373')}
    </td>
  </tr>
</table>`
}

function renderHeading(content, t) {
  const parts = []
  const h1Text = content.h1 || ''
  const h2Text = content.h2 ?? ''
  const style = content.style || 'h1'
  const subhead = content.subhead || false

  if (subhead && h1Text) {
    parts.push(`<p style="margin:0;font-family:${FONT_STACK};font-size:18px;font-weight:500;line-height:22px;color:#737373;">${escapeHtml(h1Text)}</p>`)
  }

  if (!subhead && h1Text) {
    let fontSize, fontWeight, lineHeight
    if (style === 'h1') { fontSize = '28px'; fontWeight = '500'; lineHeight = '34px' }
    else if (style === 'h2') { fontSize = '24px'; fontWeight = '500'; lineHeight = '28px' }
    else { fontSize = '20px'; fontWeight = '500'; lineHeight = '24px' }

    parts.push(`<p style="margin:0;font-family:${FONT_STACK};font-size:${fontSize};font-weight:${fontWeight};line-height:${lineHeight};color:${t.textPrimary};">${escapeHtml(h1Text)}</p>`)
  }

  if (h2Text) {
    parts.push(`<p style="margin:0;font-family:${FONT_STACK};font-size:24px;font-weight:500;line-height:28px;color:${t.textPrimary};">${escapeHtml(h2Text)}</p>`)
  }

  if (parts.length === 0) return ''

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:20px 24px 0 24px;font-family:${FONT_STACK};">
      ${parts.join('\n      ')}
    </td>
  </tr>
</table>`
}

function renderParagraph(content, t) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 24px;font-family:${FONT_STACK};font-size:18px;font-weight:400;line-height:22px;color:${t.textSecondary};">
      ${escapeHtml(content.text || '')}
    </td>
  </tr>
</table>`
}

function renderCta(content, t) {
  const btnShadow = '0 0 0 0 rgba(0,0,0,0.02),0 2px 4px 0 rgba(0,0,0,0.16)'
  const primaryHref = content.primaryLink ? escapeAttr(content.primaryLink) : '#'
  const primaryBtn = `<a href="${primaryHref}" target="_blank" style="display:inline-block;padding:16px 24px;background:${t.btnPrimaryBg};color:${t.btnPrimaryText};font-family:${FONT_STACK};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};">${escapeHtml(content.primaryLabel || 'Button')}</a>`

  const secondaryHref = content.secondaryLink ? escapeAttr(content.secondaryLink) : '#'
  const secondaryBtn = content.layout === 'double'
    ? `<!--[if mso]>&nbsp;&nbsp;<![endif]--><a href="${secondaryHref}" target="_blank" style="display:inline-block;padding:16px 24px;background:${t.btnSecondaryBg};color:${t.btnSecondaryText};font-family:${FONT_STACK};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};margin-left:12px;">${escapeHtml(content.secondaryLabel || 'Button')}</a>`
    : ''

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:16px 24px;font-family:${FONT_STACK};">
      ${primaryBtn}${secondaryBtn}
    </td>
  </tr>
</table>`
}

function renderDivider(t) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 24px;">
      <div style="border-top:1px solid ${t.border};"></div>
    </td>
  </tr>
</table>`
}

const IMAGE_HEIGHTS = { small: 200, medium: 300, large: 400 }

function renderImage(content) {
  if (!content.src) return ''

  const height = IMAGE_HEIGHTS[content.size] || IMAGE_HEIGHTS.medium
  const isBase64 = content.src.startsWith('data:')
  const imgTag = `${isBase64 ? '<!-- ⚠️ Replace this base64 image with a hosted URL for email delivery -->\n      ' : ''}<img src="${escapeAttr(content.src)}" alt="${escapeAttr(content.alt || '')}" width="576" style="display:block;width:100%;max-width:576px;height:${height}px;object-fit:cover;border-radius:32px;" />`
  const inner = content.link
    ? `<a href="${escapeAttr(content.link)}" target="_blank" style="display:block;">${imgTag}</a>`
    : imgTag

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 12px;">
      ${inner}
    </td>
  </tr>
</table>`
}

function renderFooter(content, t) {
  const unsubText = content.unsubscribeText || ''
  const socialIcons = [
    { name: 'X', svg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6904 1.1106H12.6582L8.35904 6.0243L13.4167 12.7107H9.4566L6.35489 8.65545L2.80584 12.7107H0.836793L5.43521 7.45498L0.583374 1.1106H4.64402L7.44769 4.81729L10.6904 1.1106ZM9.99972 11.5329H11.0901L4.05152 2.22659H2.88139L9.99972 11.5329Z" fill="#737373"/></svg>' },
    { name: 'Discord', svg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8516 2.42413C10.9593 2.01469 10.0024 1.71304 9.00194 1.54028C8.98372 1.53694 8.96552 1.54527 8.95613 1.56194C8.83307 1.78082 8.69676 2.06636 8.6013 2.29079C7.52524 2.12969 6.45469 2.12969 5.40069 2.29079C5.30521 2.06137 5.16395 1.78082 5.04033 1.56194C5.03095 1.54583 5.01275 1.5375 4.99453 1.54028C3.99461 1.71249 3.03774 2.01414 2.14488 2.42413C2.13715 2.42746 2.13052 2.43302 2.12613 2.44023C0.311145 5.15178-0.186054 7.79667 0.0578551 10.4088C0.0589587 10.4216 0.0661324 10.4338 0.0760655 10.4416C1.27354 11.3209 2.4335 11.8548 3.57191 12.2087C3.59013 12.2142 3.60944 12.2076 3.62103 12.1926C3.89032 11.8248 4.13037 11.4371 4.33619 11.0293C4.34834 11.0054 4.33675 10.9771 4.31192 10.9676C3.93116 10.8232 3.5686 10.6471 3.21984 10.4471C3.19226 10.431 3.19005 10.3915 3.21543 10.3727C3.28882 10.3177 3.36223 10.2604 3.43231 10.2027C3.44499 10.1921 3.46265 10.1899 3.47756 10.1966C5.76875 11.2426 8.24923 11.2426 10.5134 10.1966C10.5283 10.1893 10.546 10.1916 10.5592 10.2021C10.6293 10.2599 10.7027 10.3177 10.7766 10.3727C10.802 10.3915 10.8003 10.431 10.7728 10.4471C10.424 10.651 10.0614 10.8232 9.68013 10.9671C9.65531 10.9765 9.64426 11.0054 9.65641 11.0293C9.86665 11.4365 10.1067 11.8243 10.371 12.192C10.3821 12.2076 10.4019 12.2142 10.4201 12.2087C11.5641 11.8548 12.724 11.3209 13.9215 10.4416C13.932 10.4338 13.9386 10.4221 13.9397 10.4093C14.2316 7.38945 13.4508 4.76625 11.8698 2.44079C11.8659 2.43302 11.8593 2.42746 11.8516 2.42413ZM4.67835 8.81828C3.98854 8.81828 3.42016 8.18499 3.42016 7.40724C3.42016 6.62949 3.97752 5.9962 4.67835 5.9962C5.38468 5.9962 5.94755 6.63505 5.93651 7.40724C5.93651 8.18499 5.37915 8.81828 4.67835 8.81828ZM9.33027 8.81828C8.64048 8.81828 8.0721 8.18499 8.0721 7.40724C8.0721 6.62949 8.62944 5.9962 9.33027 5.9962C10.0366 5.9962 10.5995 6.63505 10.5885 7.40724C10.5885 8.18499 10.0366 8.81828 9.33027 8.81828Z" fill="#737373"/></svg>' },
    { name: 'Instagram', svg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.26055C8.87031 1.26055 9.0918 1.26875 9.82734 1.30156C10.5109 1.33164 10.8801 1.44648 11.1262 1.54219C11.4516 1.66797 11.6867 1.82109 11.9301 2.06445C12.1762 2.31055 12.3266 2.54297 12.4523 2.86836C12.548 3.11445 12.6629 3.48633 12.693 4.16719C12.7258 4.90547 12.734 5.12695 12.734 6.99453C12.734 8.86484 12.7258 9.08633 12.693 9.82188C12.6629 10.5055 12.548 10.8746 12.4523 11.1207C12.3266 11.4461 12.1734 11.6813 11.9301 11.9246C11.684 12.1707 11.4516 12.3211 11.1262 12.4469C10.8801 12.5426 10.5082 12.6574 9.82734 12.6875C9.08906 12.7203 8.86758 12.7285 7 12.7285C5.12969 12.7285 4.9082 12.7203 4.17266 12.6875C3.48906 12.6574 3.11992 12.5426 2.87383 12.4469C2.54844 12.3211 2.31328 12.168 2.06992 11.9246C1.82383 11.6785 1.67344 11.4461 1.54766 11.1207C1.45195 10.8746 1.33711 10.5027 1.30703 9.82188C1.27422 9.0836 1.26602 8.86211 1.26602 6.99453C1.26602 5.12422 1.27422 4.90273 1.30703 4.16719C1.33711 3.48359 1.45195 3.11445 1.54766 2.86836C1.67344 2.54297 1.82656 2.30781 2.06992 2.06445C2.31602 1.81836 2.54844 1.66797 2.87383 1.54219C3.11992 1.44648 3.4918 1.33164 4.17266 1.30156C4.9082 1.26875 5.12969 1.26055 7 1.26055ZM7 0C5.09961 0 4.86172 0.00820312 4.11523 0.0410156C3.37148 0.0738281 2.86016 0.194141 2.41719 0.366406C1.95508 0.546875 1.56406 0.784766 1.17578 1.17578C0.784766 1.56406 0.546875 1.95508 0.366406 2.41445C0.194141 2.86016 0.0738281 3.36875 0.0410156 4.1125C0.00820313 4.86172 0 5.09961 0 7C0 8.90039 0.00820313 9.13828 0.0410156 9.88477C0.0738281 10.6285 0.194141 11.1398 0.366406 11.5828C0.546875 12.0449 0.784766 12.4359 1.17578 12.8242C1.56406 13.2125 1.95508 13.4531 2.41445 13.6309C2.86016 13.8031 3.36875 13.9234 4.1125 13.9563C4.85898 13.9891 5.09688 13.9973 6.99727 13.9973C8.89766 13.9973 9.13555 13.9891 9.88203 13.9563C10.6258 13.9234 11.1371 13.8031 11.5801 13.6309C12.0395 13.4531 12.4305 13.2125 12.8188 12.8242C13.207 12.4359 13.4477 12.0449 13.6254 11.5855C13.7977 11.1398 13.918 10.6313 13.9508 9.8875C13.9836 9.14102 13.9918 8.90313 13.9918 7.00274C13.9918 5.10234 13.9836 4.86445 13.9508 4.11797C13.918 3.37422 13.7977 2.86289 13.6254 2.41992C13.4531 1.95508 13.2152 1.56406 12.8242 1.17578C12.4359 0.7875 12.0449 0.546875 11.5855 0.369141C11.1398 0.196875 10.6313 0.0765625 9.8875 0.04375C9.13828 0.00820313 8.90039 0 7 0Z" fill="#737373"/><path d="M7 3.4043C5.01484 3.4043 3.4043 5.01484 3.4043 7C3.4043 8.98516 5.01484 10.5957 7 10.5957C8.98516 10.5957 10.5957 8.98516 10.5957 7C10.5957 5.01484 8.98516 3.4043 7 3.4043ZM7 9.33242C5.71211 9.33242 4.66758 8.28789 4.66758 7C4.66758 5.71211 5.71211 4.66758 7 4.66758C8.28789 4.66758 9.33242 5.71211 9.33242 7C9.33242 8.28789 8.28789 9.33242 7 9.33242Z" fill="#737373"/><path d="M11.5773 3.26206C11.5773 3.72691 11.2 4.10152 10.7379 4.10152C10.273 4.10152 9.89844 3.72417 9.89844 3.26206C9.89844 2.79722 10.2758 2.42261 10.7379 2.42261C11.2 2.42261 11.5773 2.79995 11.5773 3.26206Z" fill="#737373"/></svg>' },
    { name: 'Threads', svg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3204 6.48873C10.2601 6.45983 10.1988 6.43201 10.1368 6.40537C10.0287 4.41424 8.94071 3.27432 7.11385 3.26266C7.10557 3.26261 7.09734 3.26261 7.08906 3.26261C5.99636 3.26261 5.08758 3.72902 4.52823 4.57776L5.53295 5.26698C5.95081 4.633 6.60659 4.49785 7.08955 4.49785C7.09512 4.49785 7.10072 4.49785 7.10624 4.4979C7.70776 4.50174 8.16167 4.67663 8.45545 5.01769C8.66924 5.26599 8.81223 5.60912 8.88303 6.04215C8.34972 5.95151 7.77295 5.92364 7.15637 5.95899C5.41947 6.05904 4.30285 7.07203 4.37785 8.47963C4.4159 9.19363 4.7716 9.80788 5.37939 10.2091C5.89326 10.5483 6.5551 10.7142 7.24294 10.6767C8.15131 10.6269 8.86393 10.2803 9.36107 9.64658C9.73864 9.16533 9.97744 8.54168 10.0829 7.75585C10.5158 8.01711 10.8366 8.36092 11.0138 8.77421C11.3151 9.47676 11.3327 10.6313 10.3907 11.5725C9.56531 12.397 8.57321 12.7537 7.07386 12.7647C5.41068 12.7524 4.15284 12.219 3.33503 11.1794C2.56921 10.2059 2.17344 8.79973 2.15867 7C2.17344 5.20026 2.56921 3.79412 3.33503 2.82061C4.15284 1.78098 5.41066 1.2476 7.07384 1.23524C8.74908 1.2477 10.0288 1.78364 10.878 2.82829C11.2943 3.34057 11.6082 3.98481 11.8152 4.73596L12.9925 4.42183C12.7417 3.49724 12.347 2.70052 11.8099 2.03977C10.7213 0.700487 9.12927 0.0142295 7.07794 0H7.06973C5.02258 0.0141801 3.44834 0.703048 2.39077 2.04745C1.44968 3.2438 0.964238 4.90844 0.947927 6.99508L0.947876 7L0.947927 7.00492C0.964238 9.09154 1.44968 10.7562 2.39077 11.9526C3.44834 13.2969 5.02258 13.9859 7.06973 14H7.07794C8.89798 13.9874 10.1809 13.5109 11.2377 12.455C12.6204 11.0736 12.5788 9.34201 12.1231 8.27903C11.7961 7.51676 11.1728 6.89764 10.3204 6.48873ZM7.17791 9.44322C6.41666 9.48609 5.6258 9.14441 5.58681 8.41254C5.5579 7.8699 5.97299 7.2644 7.22463 7.19227C7.36797 7.184 7.50863 7.17996 7.6468 7.17996C8.10144 7.17996 8.52676 7.22412 8.91344 7.30866C8.76921 9.10984 7.92323 9.40231 7.17791 9.44322Z" fill="#737373"/></svg>' },
  ]
  const iconCircles = socialIcons.map(icon =>
    `<a href="#" target="_blank" style="display:inline-block;text-decoration:none;width:32px;height:32px;border-radius:999px;background:rgba(255,255,255,0.07);text-align:center;line-height:32px;margin:0 4px;box-shadow:0 0 0 0 rgba(0,0,0,0.02),0 2px 4px 0 rgba(0,0,0,0.16);" title="${icon.name}"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="width:32px;height:32px" arcsize="50%" fillcolor="#eeeeee" stroke="f"><v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true"><center><![endif]-->${icon.svg}<!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a>`
  ).join('')

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 20px;font-family:${FONT_STACK};">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-top:1px solid ${t.border};">
        <tr>
          <td style="padding:32px 0 64px;text-align:center;">
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">${escapeHtml(unsubText)}</p>
            <p style="margin:0 0 24px 0;"><a href="#" target="_blank" style="font-size:14px;font-weight:400;line-height:16px;color:#737373;text-decoration:underline;">Unsubscribe</a></p>
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">© 2025 Wabi Inc. All rights reserved.</p>
            <p style="margin:0 0 24px 0;padding-top:16px;">${iconCircles}</p>
            <p style="margin:0;padding-top:16px;">${wabiLogoSvg('#737373')}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;')
}

function renderBlock(block, t) {
  switch (block.type) {
    case 'header': return renderHeader(t)
    case 'heading': return renderHeading(block.content, t)
    case 'paragraph': return renderParagraph(block.content, t)
    case 'cta': return renderCta(block.content, t)
    case 'divider': return renderDivider(t)
    case 'image': return renderImage(block.content)
    case 'footer': return renderFooter(block.content, t)
    default: return ''
  }
}

export function renderEmailHTML(blocks, theme = 'light') {
  const t = THEMES[theme] || THEMES.light
  const renderedBlocks = blocks.map(block => renderBlock(block, t)).filter(Boolean)
  const spacer = `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"><tr><td style="height:32px;font-size:0;line-height:0;">&nbsp;</td></tr></table>`
  const bodyContent = renderedBlocks.join(`\n${spacer}\n`)

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>Wabi Email</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background:${t.bg};-webkit-text-size-adjust:none;text-size-adjust:none;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${t.bg};">
    <tr>
      <td align="center" style="padding:0;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"><tr><td><![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background:${t.card};">
          <tr>
            <td>
${bodyContent}
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function downloadEmailHTML(blocks, theme = 'light', filename = 'wabi-email.html') {
  const html = renderEmailHTML(blocks, theme)
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
