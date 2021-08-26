class GitHub {
    constructor(){
        this.client_id = '9bdb33c2be43ee4cde53';
        this.client_secret = '14283593de24ff0c4361193120a24955e090cfc2';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
        
    }
}