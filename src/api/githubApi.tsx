import { useEffect, useState } from "react";

const accessToken = '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';


type resultProps = {
    name: string;
    url: string;
    image:{
        logo:string;
        contents_url:string
    }
    languages:{
        stacks:string[];
        language_url: string;
    }
    
};

export const GetRepositories = (profileLink: string) => {
    const [repositories, setRepositories] = useState<resultProps[]>([]);

    useEffect(() => {

        const fetchRepositories = async () => {

            debugger;
            try {
                const response = await fetch(`https://api.github.com/users/${profileLink}/repos`, {
                    headers: {
                        Authorization: `token ${accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error("Erro ao buscar repositórios do GitHub.");
                }
                const data = await response.json();
                const repositoriesData: resultProps[] = data.map((repo: any) => ({
                    name: repo.name,
                    url: repo.html_url,
                    languages:{language_url: repo.languages_url},
                    image:{contents_url: repo.contents_url}
                }));
                
                var updaterepositoriesData = repositoriesData.filter(repo => repo.name !== profileLink);

                for (const repo of updaterepositoriesData) {
                    const languagesResponse = await fetch(repo.languages.language_url,{
                        headers: {
                            Authorization: `token ${accessToken}`
                        }
                    });
                    if (languagesResponse.ok) {
                        const languagesData = await languagesResponse.json();
                        repo.languages.stacks = Object.keys(languagesData);
                    }
                    const imageResponse = await fetch(repo.image.contents_url.replace('{+path}','logo.png'),{
                        headers: {
                            Authorization: `token ${accessToken}`
                        }
                    });
                    if (imageResponse.ok) {
                        const languagesData = await imageResponse.json();
                        repo.image.logo = languagesData.download_url;
                    }
                }
                setRepositories(updaterepositoriesData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRepositories();
    }, [profileLink]);

    console.log(repositories);
    return repositories;
};
