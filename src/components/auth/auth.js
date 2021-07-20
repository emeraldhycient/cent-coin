const verifylogin = () => {
    if (sessionStorage.getItem('hashuser')) {
        return true
    } else {
        return false
    }
}

const verifyadmin = () => {
    if (sessionStorage.getItem('hashadmin')) {
        return true
    } else {
        return false
    }
}

const logout = () => {
    if (confirm('are you sure you want to logout')) {
        sessionStorage.clear()
        window.location.reload();
    }
}

export {
    verifylogin,
    verifyadmin,
    logout
}