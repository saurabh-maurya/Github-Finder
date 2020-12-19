class Github {
  constructor() {
    this.client_id = '46843aa16fea652ef75e';
    this.client_secret = '9b086cd6beb7ce40666a21638ed4a66e4a428aa2';
    this.repos_count = 5
    this.repos_ord = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_ord}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}