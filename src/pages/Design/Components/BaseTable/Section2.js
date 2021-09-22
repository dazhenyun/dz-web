import { useEffect, useState, Fragment } from "react";
import { Input, Select, Button, DatePicker, Table } from "antd";
import SearchDrawer from "@/components/SearchDrawer";
import { Title } from "tntd";
import { pageSearchParams, defaultColumns } from "./constant";

const ButtonGroup = Button.Group;
const { RangePicker } = DatePicker;

import "./index.less";

export default () => {
	const [more1Visible, setMore1Visible] = useState(false);
	const [moreFilterDrawerVisible, setMoreFilterDrawerVisible] = useState(false);

	return (
		<Fragment>
			<Title
				title='搜索区域+新建区域+功能按钮等不同形式的说明'
				number='2'
			/>
			<div className='demo-card-warp'>
				<h2>形式一：只有简单的搜索区域</h2>
				<div className='form-area'>
					<div className='left-area'>
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button>重置</Button>
					</div>
				</div>
			</div>
			<div className='demo-card-warp'>
				<h2>形式二：简单搜索条件区域+新建按钮区域</h2>
				<div className='form-area'>
					<div className='left-area'>
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button>重置</Button>
					</div>
					<div className='right-area'>
						<Button type='primary'>新增</Button>
					</div>
				</div>
			</div>
			<div className='demo-card-warp'>
				<h2>形式三：简单搜索区域+新建按钮区域+功能按钮区域</h2>
				<div className='form-area'>
					<div className='left-area'>
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button>重置</Button>
					</div>
					<div className='right-area'>
						<Button type='primary'>新增</Button>
						<ButtonGroup>
							<Button icon='upload' />
							<Button icon='setting' />
						</ButtonGroup>
					</div>
				</div>
			</div>
			<div className='demo-card-warp'>
				<h2>形式四：简单搜索区域+新建按钮区域+功能按钮区域</h2>
				<p>01、搜索条件最多两行显示的情况</p>
				<div className='form-area'>
					<div className='left-area'>
						<RangePicker />
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button>重置</Button>
						<a onClick={() => setMore1Visible(!more1Visible)}>
							{more1Visible ? "收起" : "更多"}
						</a>
					</div>
					<div className='right-area'>
						<Button type='primary'>新增</Button>
						<ButtonGroup>
							<Button icon='upload' />
							<Button icon='setting' />
						</ButtonGroup>
					</div>
				</div>
				{
					more1Visible &&
					<div className='form-more'>
						<Select placeholder='选择机构' style={{ width: "250px" }} />
						<Input placeholder='请输入进件号' />
					</div>
				}
				<p className='mt20'>02、搜索条件超过两行显示的情况</p>
				<div className='form-area'>
					<div className='left-area'>
						<RangePicker />
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button
							icon='filter'
							onClick={() => setMoreFilterDrawerVisible(!moreFilterDrawerVisible)}
						>
							更多过滤
						</Button>
					</div>
					<div className='right-area'>
						<Button type='primary'>新增</Button>
						<ButtonGroup>
							<Button icon='upload' />
							<Button icon='setting' />
						</ButtonGroup>
					</div>
				</div>
			</div>
			<div className='demo-card-warp'>
				<h2>形式五：表格头部操作按钮</h2>
				<div
					className='form-area'
					style={{
						marginBottom: "12px"
					}}
				>
					<div className='left-area'>
						<Input placeholder='请输入名称' />
						<Input placeholder='请输入代码' />
						<Button type='primary'>搜索</Button>
						<Button>重置</Button>
					</div>
					<div className='right-area'>
						<Button type='primary'>新增</Button>
						<ButtonGroup>
							<Button icon='upload' />
							<Button icon='setting' />
						</ButtonGroup>
					</div>
				</div>
				<div className='table-area'>
					<Table
						className='border-table'
						title={() => {
							return (
								<div className='table-header'>
									<ButtonGroup
										style={{
											marginRight: "10px",
											marginLeft: "12px"
										}}
									>
										<Button icon='bulb'>对比分析</Button>
										<Button icon='eye'>显示配置</Button>
									</ButtonGroup>
									<Button icon='read'>更多阅读</Button>
								</div>
							);
						}}
						rowKey="id"
						dataSource={[]}
						columns={defaultColumns}
						pagination={{
							pageSize: 10,
							total: 100,
							current: 1,
							showTotal: total => `共${total}条`,
							onChange: () => { },
							onShowSizeChange: () => { },
							showQuickJumper: true,
							showSizeChanger: true
						}}
					/>
				</div>
			</div>
			<SearchDrawer
				pageSearchParams={pageSearchParams}
				dispatch={() => { }}
				drawerTitle='更多过滤'
				showDrawer={moreFilterDrawerVisible}
				onCancel={() => {
					setMoreFilterDrawerVisible(false);
				}}
			/>
		</Fragment>
	);
};
