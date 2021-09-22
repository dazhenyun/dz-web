import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
	Drawer,
	Input,
	InputNumber,
	Select,
	DatePicker,
	Button
} from "antd";
import styles from "./SearchDrawer.less";

const Option = Select.Option;
const Search = Input.Search;
const { MonthPicker, RangePicker } = DatePicker;

class SearchDrawer extends PureComponent {
	constructor(props) {
		super(props);
		this.changeSearchField = this.changeSearchField.bind(this);
		this.startSearch = this.startSearch.bind(this);
		this.listener = this.listener.bind(this);
	}

	componentDidMount() {
		const { mask } = this.props;
		if (mask) return;
		document.body.addEventListener("click", this.listener);
	}

	componentWillUnmount() {
		document.body.removeEventListener("click", this.listener);
	}

	listener(e) {
		const { showDrawer } = this.props;
		if (showDrawer) {
			const clientWidth = document.body.clientWidth;
			if (e.clientY <= 65 || e.clientX <= clientWidth - 300) {
				this.handleClose();
			}
		}
	}

	changeSearchField(field, type, e) {
		let { onChange, onSearch, onSelect } = this.props;
		let value;

		if (type === "input") {
			value = e.target.value;
		} else if (type === "select" || type === "date" || type === "linkAgeSelect") {
			value = e;
		}
		if (typeof (onChange) === "function") onChange(field, value);
		if (type === "select") {
			if (typeof (onSearch) !== "function") return;
			onSearch();
		}
		if (type === "linkAgeSelect") {
			if (typeof (onSelect) !== "function") return;
			onSelect();
		}
	}

	startSearch() {
		let { onSearch } = this.props;
		if (typeof (onSearch) !== "function") return;
		onSearch();
	}

	clearParams() {
		let { onClear } = this.props;
		if (typeof (onClear) !== "function") return;
		onClear();
	}

	linkChange() {
		let { onSelect } = this.props;
		if (typeof (onSelect) !== "function") return;
		onSelect();
	}

	handleClose() {
		let { onCancel } = this.props;
		if (typeof (onCancel) !== "function") return;
		onCancel();
	}

	render() {
		let { pageSearchParams, drawerTitle, mask, showDrawer, loading } = this.props;

		return (
			<Drawer
				title={drawerTitle}
				width={300}
				className="page-search-drawer-wrap"
				placement="right"
				closable={true}
				onClose={this.handleClose.bind(this)}
				visible={showDrawer}
				mask={mask}
			>
				<div className="search-drawer-detail">
					{
						pageSearchParams && pageSearchParams.map((item, index) => {
							return (
								<div className="filter-item" key={index}>
									{
										item.labelText &&
										<div className="label-text" key={index}>
											{item.labelText}
										</div>
									}
									{
										item.children && item.children.map((subItem, subIndex) => {
											return (
												<div className="param-item" key={subIndex}>
													{
														subItem.componentType &&
														subItem.componentType === "input" &&
														!subItem.isInputNumber &&
														<Input
															placeholder={subItem.placeholder}
															value={subItem.value || undefined}
															onChange={this.changeSearchField.bind(this, subItem.name, "input")}
															onPressEnter={this.startSearch.bind(this)}
														/>
													}
													{
														subItem.componentType &&
														subItem.componentType === "input" &&
														subItem.isInputNumber &&
														<InputNumber
															placeholder={subItem.placeholder}
															value={subItem.value || undefined}
															onChange={this.changeSearchField.bind(this, subItem.name, "select")}
														/>
													}
													{
														subItem.componentType &&
														subItem.componentType === "select" &&
														<Select
															// dropdownMatchSelectWidth={false}
															showSearch
															optionFilterProp="children"
															placeholder={subItem.placeholder}
															value={subItem.value || undefined}
															onChange={this.changeSearchField.bind(this, subItem.name, "select")}
														>
															{
																subItem.selectOption &&
																subItem.selectOption.map((optionItem, optionIndex) => {
																	return (
																		<Option value={optionItem.name} key={optionIndex}>
																			{
																				optionItem.dName
																			}
																		</Option>
																	);
																})
															}
														</Select>
													}
													{
														subItem.componentType &&
														subItem.componentType === "linkAgeSelect" &&
														<Select
															placeholder={subItem.placeholder}
															// dropdownMatchSelectWidth={false}
															showSearch
															optionFilterProp="children"
															value={subItem.value || undefined}
															onChange={this.changeSearchField.bind(this, subItem.name, "linkAgeSelect")}
															onSelect={this.linkChange.bind(this)}
														>
															{
																subItem.selectOption &&
																subItem.selectOption.map((optionItem, optionIndex) => {
																	return (
																		<Option value={optionItem.name} key={optionIndex}>
																			{
																				optionItem.dName
																			}
																		</Option>
																	);
																})
															}
														</Select>
													}
													{
														subItem.componentType &&
														subItem.componentType === "date" &&
														<DatePicker
															showTime
															format={subItem.format ? subItem.format : "YYYY-MM-DD HH:mm:ss"}
															value={subItem.value || undefined}
															onChange={this.changeSearchField.bind(this, subItem.name, "date")}
															onOk={this.startSearch.bind(this)}
															placeholder={subItem.placeholder || undefined}
														/>
													}
													{
														subItem.componentType &&
														subItem.componentType === "searchBtn" &&
														<Button
															type="primary"
															onClick={this.startSearch.bind(this)}
															block
															loading={loading}
														>
															{subItem.name}
														</Button>
													}
													{
														subItem.componentType &&
														subItem.componentType === "clearBtn" &&
														<Button onClick={this.clearParams.bind(this)}
															block>{subItem.name}</Button>
													}
												</div>
											);
										})
									}
								</div>
							);
						})
					}
				</div>
			</Drawer>
		);
	}
}

SearchDrawer.propTypes = {
	onSearch: PropTypes.func,
	onClear: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func,
	drawerTitle: PropTypes.string,
	showDrawer: PropTypes.bool,
	mask: PropTypes.bool,
	pageSearchParams: PropTypes.array
};

SearchDrawer.defaultProps = {
	drawerTitle: "搜索过滤",
	mask: false
};

export default SearchDrawer;
