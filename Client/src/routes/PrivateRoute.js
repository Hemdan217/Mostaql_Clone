const isAuthGuard = () => {
    const token = localStorage.getItem('isAuth');
    if(token){
      
        return true;
    }else{
        return false;
    }
}

export  {
    isAuthGuard,
};