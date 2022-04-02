import { Bolt, BusinessCenter, Edit, FeaturedPlayList, LocationOn } from "@mui/icons-material";

export const CV_MENU_ITEMS = [
    {
        id: 1,
        title: "Tạo CV",
        icon: <Edit fontSize="small" />,
        link: "/your-cv/edit"
    },
    {
        id: 2,
        title: "Quản lý CV",
        icon: <FeaturedPlayList fontSize="small" />,
        link: "/your-cv"
    }
];

export const JOB_MENU_ITEMS = [
    {
        id: 1,
        title: "Việc làm theo kỹ năng",
        icon: <Bolt fontSize="small" />,
        link: "/jobs/skills"
    },
    {
        id: 2,
        title: "Việc làm theo chức vụ",
        icon: <BusinessCenter fontSize="small" />,
        link: "/jobs/job-titles"
    },
    {
        id: 3,
        title: "Việc làm theo địa điểm",
        icon: <LocationOn fontSize="small" />,
        link: "/jobs/locations"
    }
];