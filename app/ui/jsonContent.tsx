namespace WebpageContent {
    export interface WebpageContent {
        avatar: string,
        heroImage: string,
        about: string,
        metaData: MetaDataField[];
        experienceCategories: ExperienceCategory[];
        friendsImages: FriendImage[]
    }

    export interface ExperienceCategory {
        title: string,
        experiences: Experience[]
    }

    export interface Experience {
        title: string,
        heroImage: string,
        descriptions: Description[],
        images: ExperienceImage[],
        videos: ExperienceVideo[],
        links: ExperienceLink[],
        about: string
    }

    export interface FriendImage {
        src: string,
        alt: string
    }

    export interface Description {
        title: string,
        details: string
    }

    export interface ExperienceImage {
        src: string,
        thumbnail: string,
        alt: string
    }

    export interface ExperienceVideo {
        src: string,
    }

    export interface ExperienceLink {
        title: string,
        href: string
    }

    export interface MetaDataField {
        title: string;
        data: string;
        type: string;
    }
}