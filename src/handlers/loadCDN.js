function loadCDN() {

    try {
        const link = document.createElement("link")
        link.rel = 'stylesheet';
        link.href = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`;
    
        document.head.append(link);

        console.log(`============= CDN Loaded! =============`)
    } catch (error) {
        console.error(error)
    }
  
}

export default loadCDN;