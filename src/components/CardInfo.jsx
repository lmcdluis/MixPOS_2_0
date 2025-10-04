import { Card, Flex, Avatar } from "antd";

const CardInfo = ({ title, value, percentage, loading }) => {
  return (
    <Card rounded={"xl"} className="frozen-card" p={2} loading={loading}>
      <div className="row">
        <div className="col-8">
          <h4 className="text-muted">{title}</h4>
        </div>
        <div className="col-4 text-end">
          <Avatar
            size="large"
            icon={<i className="bi bi-box-seam"></i>}
            style={{ backgroundColor: "#06535eff", color: "#fff" }}
          />
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-8">
          <h2 className="mb-0">{value}</h2>
        </div>
        <div className="col-4 text-end">
          <span className="text-success">{percentage}</span>
        </div>
      </div>
    </Card>
  );
};
export default CardInfo;
