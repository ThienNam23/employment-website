import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./style.css";
import { JOB } from "./data";
import { ContentCopy } from "@mui/icons-material";

const jobGeneralInfos = (job) => {
    const { salary, recruitNumber, jobType, level, gender, experience } = job;
    const infos = [
        {
            title: "Mức lương",
            content: salary,
        },
        {
            title: "Số lượng tuyển",
            content: recruitNumber + " người",
        },
        {
            title: "Hình thức làm việc",
            content: jobType,
        },
        {
            title: "Cấp bậc",
            content: level,
        },
        {
            title: "Giới tính",
            content: gender,
        },
        {
            title: "Kinh nghiệm",
            content: experience,
        }
    ];
    return (
        <div className="_job-general-info-container">
            {infos.map((item, index) => {
                const { title, content } = item;
                return (
                    <div className="_job-general-info" key={index}>
                        <strong>{title}</strong>
                        <div>{content}</div>
                    </div>
                )
            })}
        </div>
    )
}

const jobHeader = (job) => {
    const { title, company, expiryDate } = job;
    console.log(job);
    return (
        <div className="_job-header p-2 bg-white">
            <Card.Img className="_job-card-img" variant="top" src={company.logo} />
            <div>
                <div className="_job-header-title">{title}</div>
                <div>{company.name}</div>
                <div>Hạn nộp hồ sơ: {expiryDate}</div>
            </div>
        </div>
    )
}
const Job = () => {
    const params = useParams();
    const { jobId } = params;
    const job = JOB;
    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)"}} className="pt-3">
            <div className="container mb-2">
                {jobHeader(job)}
            </div>
            <div className="container _app-fs-16">
                <h5>Chi tiet tuyen dung, {'Job id: ' + jobId}</h5>
                <div className="row">
                    <div className="col">
                        <div className="_app-bdr-10 _app-bg-light-green mb-3 p-3">
                            <h5>Thong tin chung</h5>
                            {jobGeneralInfos(job)}
                        </div>
                        <div className="_app-bdr-10 mb-3 _app-bg-light-green p-3">
                            <h5>Địa điểm làm việc</h5>
                            <div>{job.address}</div>
                        </div>
                        <div className="_app-bdr-10 bg-white p-3">
                            <h6>Mo ta cong viec</h6>
                            - Chạy ads facebook, youtube, tiktok
                            - Lên kế hoạch, triển khai, đo lường báo cáo chiến dịch
                            - Theo dõi, phân tích, thống kê các số liệu, hiệu chỉnh và tối ưu các chiến dịch
                            - KPI lead, số người tham gia hội thảo
                            - Thực hiện các công việc được giao từ quản lý
                            <h6>Yêu cầu ứng viên</h6>
                            - Có laptop cá nhân
                            - Ưu tiên có kinh nghiệm chạy ads mảng giáo dục, thu hút tham gia zoom live
                            - Ít nhất 1 năm kinh nghiệm
                            <h6>Quyền lợi</h6>
                            - Tổng thu nhập sau thử việc 10-15tr
                            - Thời gian làm việc từ 8h30-17h30, nghỉ trưa 12h-13h, từ thứ 2 - sáng thứ 7
                            - Thưởng lương tháng 13
                            - Ký hợp đồng lao động
                            - Thưởng lễ tế theo quy định của nhà nước
                            - Chính sách chia sẻ lợi nhuận dài hạn cùng cty
                            - Làm việc trong môi trường năng động, chuyên nghiệp có nhiều cơ hội thăng tiến.
                            - Được đóng BHXH, BHYT, BHTN.
                            - Được hưởng các chính sách phúc lợi theo quy định của công ty
                            <h6>Cách thức ứng tuyển</h6>
                            Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây. <br />
                            Hạn nộp hồ sơ: 16/05/2022 <br />
                            <button className="btn btn-success">Ung tuyen ngay</button>
                        </div>
                    </div>
                    <div className="col-3 bg-white _app-bdr-10 p-3 _app-fs-15"
                        style={{ height: "min-content"}}>
                        <div>
                            <h5>Chia se tin tuyen dung</h5>
                            <p>Sao chep duong dan</p>
                            <div className="row _app-fs-14 _app-bdr-10"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)"}}
                            >
                                <div className="col">https://www.topcv.vn/viec-lam/designe</div>
                                <div className="col-2 my-auto">
                                    <ContentCopy></ContentCopy>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Bao cao tin tuyen dung</p>
                            <p>Nếu bạn thấy rằng tin tuyển dụng này không đúng, hãy phản ánh với chúng tôi</p>
                            <button className="btn btn-primary">Bao cao</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Job;