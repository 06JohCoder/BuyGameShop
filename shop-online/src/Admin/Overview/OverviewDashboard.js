import React from "react";
import "./OverviewDashboard.scss";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../components/ui/Card";


const OverviewDashboard = () => {
    const stats = [
        { label: "Tổng sản phẩm", value: 115 },
        { label: "Tổng đơn hàng", value: 223 },
        { label: "Người dùng", value: 400 },
        { label: "Đơn đang nợ", value: 78 },
    ];

    const data = [
        { name: "Hôm nay", doanhThu: 500000 },
        { name: "Hôm qua", doanhThu: 400000 },
        { name: "3 ngày", doanhThu: 2000000 },
        { name: "5 ngày", doanhThu: 2500000 },
        { name: "7 ngày", doanhThu: 3500000 },
        { name: "15 ngày", doanhThu: 8000000 },
        { name: "20 ngày", doanhThu: 12000000 },
        { name: "25 ngày", doanhThu: 10000000 },
        { name: "30 ngày", doanhThu: 15000000 },
    ];

    return (
        <motion.div
            className="overview-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1 className="title">Tổng Quan Quản Lý</h1>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <Card key={index} className="stat-card">
                        <CardContent className="stat-content">
                            <p className="stat-label">{stat.label}</p>
                            <p className="stat-value">{stat.value}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="chart-card">
                <CardContent className="chart-content">
                    <h2 className="chart-title">Biểu đồ doanh thu</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 10, bottom: 10, left: 50 }}
                        >
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis stroke="#888" tick={{ fontSize: 12 }} />
                            <Tooltip formatter={(value) => `${value.toLocaleString()} đ`} />
                            <Bar dataKey="doanhThu" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default OverviewDashboard;
