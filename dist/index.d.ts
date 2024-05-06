import { MenuItem } from 'primereact/menuitem';
import { TreeNode } from 'primereact/treenode';
import { Nullable } from 'primereact/ts-helpers';
import React, { DragEvent } from 'react';
import { CSSTransitionProps } from 'primereact/csstransition';
import { TreeMultipleSelectionKeys, TreeCheckboxSelectionKeys } from 'primereact/tree';

type ShadowAccordionToggleIconPosition = 'start' | 'end';

type tagType = 'primary' | 'secondary' | 'success' | 'info' | 'alert' | 'danger' | 'neutral';
interface ShadowTagItem {
    label?: string;
    icon?: string | null;
    type: tagType;
    isPill?: boolean;
}

interface ShadowAreaActionItem {
    title?: string | null;
    height?: string;
    width?: string;
    primaryButtonText?: string | null;
    secondaryButtonText?: string | null;
    primaryButtonIcon?: string | null;
    secondaryButtonIcon?: string | null;
    primaryButtonType?: tagType | null;
    secondaryButtonType?: tagType;
    data?: any;
}

type ShadowAvatarSize = 'micro' | 'normal' | 'large' | 'xlarge';
type ShadowAvatarType = 'image' | 'initials' | 'icon';
type ShadowAvatarThemeStyle = 'primary' | 'neutral';
type ShadowAvatarActionStyle = 'strong' | 'subdued';
type ShadowAvatarShape = 'circle' | 'square';
type ShadowAvatarBadgeSeverity = 'success' | 'info' | 'warning' | 'danger';
interface ShadowAvatarGroup {
    imageUrl?: string;
    label?: string;
    icon?: string;
}

type ShadowButtonSize = 'sm' | 'md' | 'lg';
type ShadowButtonActionStyle = 'brand' | 'contrast' | 'destructive' | 'success' | 'warning' | 'custom';
type ShadowButtonType = 'primary' | 'secondary' | 'text' | 'link' | 'iconOnly';
type ShadowButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
interface ShadowButtonGroupItem {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: ShadowButtonIconPosition;
    icon?: string;
    buttonType?: ShadowButtonType;
    size?: ShadowButtonSize;
    buttonActionStyle?: ShadowButtonActionStyle;
}
type ShadowButtonGroupDirection = 'horizontal' | 'vertical';

interface ShadowBannerItem {
    severity: ShadowBannerSeverity;
    summary?: string;
    closable?: boolean;
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
}
type ShadowBannerSeverity = 'info' | 'success' | 'warn' | 'error';
type ShadowBannerTextWrap = 'ellipsis' | 'wrap';

type ShadowBreadcrumbSize = 'sm' | 'lg';
type ShadowBreadcrumbTruncation = 'middle' | 'beginning' | null;
interface ShadowBreadcrumbStyle {
    icon?: string;
}
interface ShadowBreadcrumbItem {
    text?: string;
    isEditable?: boolean;
    routeLink?: string;
}

type ShadowCalendarSelType = 'single' | 'multiple' | 'range';
type ShadowCalendarType = 'date' | 'month' | 'year' | 'time';
declare const ShadowCalendarMonths: string[];
declare const ShadowCalendarDays: string[];
declare const ShadowCalendarFullDays: string[];
declare const ShadowCalendarMonthsLabel: string[];

interface ShadowTieredMenuItems {
    label?: string;
    icon?: string;
    items?: ShadowTieredMenuItems[];
    separator?: boolean;
    className?: string;
    data?: any;
}
interface ShadowTieredMenuOption {
    icon?: string;
    height?: number;
    width?: number;
}

interface ShadowCardOption {
    isDragable?: boolean;
    showAction?: boolean;
    title?: string;
    dropDownPosition?: string;
    dropDownOption?: ShadowTieredMenuOption;
    dragboxCardWidth?: string;
    shadowTag?: ShadowTagItem;
    isDisplayDragHandle?: boolean;
}
interface ShadowDropBoxCardOption extends ShadowCardOption {
    menuItems?: ShadowTieredMenuItems[];
}

interface ShadowChartMetaData {
    updateFlag: boolean;
    chart?: Highcharts.ChartOptions;
    credits?: Highcharts.CreditsOptions;
    plotOptions?: Highcharts.PlotOptions;
    title?: Highcharts.TitleOptions;
    subtitle?: Highcharts.SubtitleOptions;
    chartWidth?: string;
    chartHeight?: string;
    xAxis?: Highcharts.XAxisOptions;
    yAxis?: Highcharts.YAxisOptions;
    tooltip?: Highcharts.TooltipOptions;
    series?: any;
    legend?: Highcharts.LegendOptions;
}
interface TrellisChartMetaData {
    chartData: TrellisChartData[];
    yAxisLabels?: string[];
    xAxisLabels?: string[];
    yAxisTitle?: string;
    xAxisTitle?: string;
    suffix?: string;
    showGridLines?: boolean;
    showDataLabels?: boolean;
}
interface TrellisChartData {
    name?: string;
    series?: any;
}

interface ShadowStep {
    icon?: string;
    label?: string;
    title?: string;
    desc?: string;
    current?: boolean;
    completed?: boolean;
    disabled?: boolean;
}

interface ShadowChatMessage {
    isAI: boolean;
    text: string;
    id?: string;
    index?: number;
    chart?: boolean;
    chartInfo?: ShadowChartMetaData;
    isDisabled?: boolean;
    isChatActionArea?: boolean;
    areaActionButtonOption?: ShadowAreaActionItem;
    date?: string;
    showAction?: boolean;
    actionItems?: ShadowTieredMenuItems[];
    actionOption?: ShadowTieredMenuOption;
    recomendedPrompts?: ShadowRecomendedPrompts[];
    data?: any;
    showStepper?: boolean;
    stepperData?: ShadowStep[];
    stepperActiveIndex?: number;
    stepperSpinner?: boolean;
    stepperReadonly?: boolean;
    stepperSize?: string;
}
interface ShadowRecomendedPrompts {
    type?: string;
    actionType?: string;
    showIcon?: boolean;
    icon?: string;
    prompt?: string;
    data?: any;
}
interface ShadowChatAction {
    label?: string;
    iconClass?: string;
}
interface ShadowChatBoxStyle {
    width?: string;
    inputBoxPlaceholder?: string;
    inputAttachmentIcon?: string;
    logo?: string;
    icon?: string;
    actionDropDownIcon?: string;
    chatBoxHeight?: string;
}
interface ShadowEmptyChat {
    title?: string;
    icon?: string;
    inputPlaceholder?: string;
    searchIcon?: string;
    showEmptyChatHeader?: boolean;
}
interface ShadowTemplateList {
    title?: string;
    routerLink?: string;
}
interface ShadowSavedTemplate {
    icon?: string;
    title?: string;
    showSavedTemplate?: boolean;
    templates?: ShadowTemplateList[];
}
interface ShadowPromptTemplate {
    label?: string;
}
interface ShadowChatBoxHead {
    title?: string;
    closeIcon?: string;
    showChatBoxHeader?: boolean;
}
interface ShadowDataSkillList {
    icon?: string;
    iconBackgroundColor?: string;
    title?: string;
}
interface ShadowPopularData {
    title?: string;
    icon?: string;
    arrowIcon?: string;
    showPopularDataSkill?: boolean;
    dataSkills?: ShadowDataSkillList[];
}

type ShadowCheckboxStyleType = 'default' | 'error';
type ShadowCheckboxType = 'default' | 'triState';

interface KeyMapper {
    key: string;
    desc?: string;
    label?: string;
    filterKey?: string;
    selectKey?: string;
    format?: string;
}
interface Filter {
    key: string;
    operator?: string;
    value: any;
}
interface RequestModel {
    select?: string[];
    filter?: Filter[];
    orderBy?: any;
    groupBy?: string[];
    pageSize?: number;
    pageNo?: number;
    scope?: Record<string, any>;
}
interface SendRequestModel extends RequestModel {
    type?: string;
    body?: RequestModel;
    mode?: string;
}
interface RequestOptions {
    ignoreCache?: boolean;
    token?: string;
    options?: any;
}
type ResponseTypes = 'Success' | 'Error' | 'Fatal' | 'Warning' | 'ErrorWarning' | 'SuccessWarning';
interface ResponseModel {
    errorCode: string;
    messageKey: string;
    messageValue: string;
    responseType: ResponseTypes;
    data: any;
    error?: any;
    errors?: any;
}

interface ShadowFooter {
    type: FooterTypes;
    icon?: string;
    text?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    cancelButtonIcon?: string;
    okButtonIcon?: string;
}
interface WindowPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}
type FooterTypes = 'confirm' | 'alert' | 'custom' | 'none';
type ShadowDialogModes = 'default' | 'notification';
declare enum ModeType {
    popup = "app-modal-popup",
    dialog = "app-modal-dialog"
}
type DialogPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;
declare enum ShadowDialogEvent {
    close = "close",
    cancel = "cancel",
    submit = "submit"
}

type ShadowDividerType = 'basic' | 'or';
type ShadowDividerLineStyle = 'solid' | 'dotted' | 'dashed';
type ShadowDividerLayout = 'vertical' | 'horizontal';
type ShadowDividerAlign = 'center' | 'left' | 'top' | 'bottom' | 'right';

interface ShadowDropdownOption {
    label?: string;
    value?: any;
    icon?: string;
}
interface ShadowDropdownGroupOption {
    label: string;
    value?: any;
    icon?: string;
    items: GroupItems[];
}
interface GroupItems {
    label?: string;
    value?: any;
}

interface ShadowInputMaskItem {
    name: string;
    code: string;
    image: string;
}

type ShadowInputTextSize = 'sm' | 'md' | 'lg';

type ShadowInputTextAreaState = 'default' | 'error';
type ShadowInputTextAreaSize = 'small' | 'medium' | 'large';

interface ShadowMultiselectOption extends ShadowDropdownOption {
}
interface ShadowMultiselectGroupOption extends ShadowDropdownGroupOption {
}

interface ShadowNotificationItem {
    icon?: string;
    imageUrl?: string;
    title: string;
    subtitle?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    content?: string;
    styleClass?: string;
    id: string;
    showAction?: boolean;
    actionItems?: ShadowTieredMenuItems[];
    actionOption?: ShadowTieredMenuOption;
    windowPosition?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
}

interface ShadowPanelItem {
    title?: string;
    left_icon?: string;
    showAction?: boolean;
    menuOption?: ShadowTieredMenuOption;
    menuItem?: ShadowTieredMenuItems[];
    isOpen?: boolean;
    toggleable?: boolean;
    right_icon?: string[];
    data?: any;
}

interface Menu {
    label: string;
    routerLink: string;
    icon: string;
}
interface ShadowMenu extends MenuItem {
    useTemplate?: boolean;
    badge?: ShadowBadgeItem;
}
declare enum ShadowMenuState {
    Open = "open",
    Close = "close"
}
interface UserProfile {
    upn: string;
    name: string | undefined;
}
interface ShadowTabItem extends MenuItem {
    label?: string;
    closable?: boolean;
    disabled?: boolean;
    id: string;
    editable?: boolean;
    icon?: string;
}
interface ShadowTreeNode extends TreeNode {
}
interface ShadowChipItem {
    key: string;
    label: string;
    removable: boolean;
    data?: any;
    type?: ShadowChipType;
    icon?: string;
    avatarUrl?: string;
    avatarSize?: any;
    theme?: ShadowChipThemeStyle;
    actionStyle?: ShadowChipActionStyle;
}
type ShadowChipThemeStyle = 'primary' | 'neutral';
type ShadowChipActionStyle = 'strong' | 'subdued';
type ShadowChipType = 'withIcon' | 'withAvatar' | 'textOnly';
type badgeType = 'success' | 'warning' | 'danger' | 'info';
interface ShadowBadgeItem {
    value: string;
    type?: badgeType | 'danger';
    size?: 'large' | 'xlarge';
    icon?: string;
    iconFontSize?: string;
}
type messsageType = 'success' | 'warn' | 'error' | 'info';
interface ShadowMessageItem {
    detail?: string;
    severity?: messsageType;
    summary?: string;
    messageIcon?: string;
    closable?: boolean;
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
}
interface ShadowToastItem {
    detail?: string;
    summary?: string;
    icon?: string;
    sticky?: boolean;
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
    key?: string;
    life?: number;
}
interface ShadowRadio {
    name?: string;
    key?: string;
    value?: any;
    disabled?: boolean;
}
interface ShadowInputGroupItem {
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
}
interface ShadowInputGroupSuggestion {
    url?: string;
    icon?: string;
    title?: string;
    subTitle?: string;
    data?: any;
}
interface ShadowClickEventOutput {
    data: any;
    context: any;
}
type ShadowInlineMessageType = 'success' | 'warning' | 'error' | 'info';

interface switchOption {
    title?: string;
    checked?: boolean;
    disabled?: boolean;
}
interface ShadowPreviewPanel {
    title?: string;
    left_icon?: string;
    showAction?: boolean;
    menuOption?: ShadowTieredMenuOption;
    menuItem?: ShadowTieredMenuItems[];
    showRefresh?: boolean;
    isOpen?: boolean;
    showSwitch?: boolean;
    switchOption?: switchOption;
    data?: ShadowPreviewPanelData;
}
interface ShadowPreviewPanelData {
    type: any;
    value?: any;
    context?: any;
}
interface ShadowPreview {
    message?: ShadowMessageItem;
    showMessage?: boolean;
    content?: ShadowPreviewPanel[];
}

interface ShadowSalesTreeInnerNodeDetail {
    label?: string;
    format?: {
        type?: string;
        outputFormat?: string;
    };
    direction?: string;
    type?: string;
    yoyDirection?: string;
    leftPanel?: ShadowSalesTreeInnerNodeDetail;
    rightPanel?: ShadowSalesTreeInnerNodeDetail;
}
interface ShadowSalesTreeMetaData extends TreeNode {
    nodeDetail?: ShadowSalesTreeInnerNodeDetail;
    children?: ShadowSalesTreeMetaData[];
    branchLabel?: string;
    id?: string;
    parentId?: string;
}

interface ShadowSelectButtonOption {
    icon?: string;
    label?: string;
    value: any;
}

/**
 * Table component column definition type
 *
 * @interface ColumnMetadata
 * @field {string} columnName   : Table column name to display on UI
 * @field {string} dataNodeName : Data node name in JSON data array that will be mapped with this column
 * @field {boolean} sortable    : Used to make column sortable, by default false.
 */
interface ColumnMetadata {
    key: string;
    columnName: string;
    dataNodeName?: string;
    sortable?: boolean;
    useTemplate?: boolean;
    enableFilter?: boolean;
    filterType?: string;
    width?: string;
    format?: {
        type: FormatType;
        outputFormat: string;
    };
    isSelected?: boolean;
}
declare enum FormatType {
    DATE = "date",
    PERCENT = "percent",
    CURRENCY = "currency",
    NUMBER = "number",
    UPPERCASE = "uppercase",
    LOWERCASE = "lowercase"
}
interface TableState {
    first?: number;
    last?: number;
    pageNo?: number;
    pageSize?: number;
    totalItems?: number;
    totalRecords?: number;
    orderBy?: Record<string, string>;
    filterParams?: Filter[];
}
interface ShadowTableMetaData {
    columnDefs: ColumnMetadata[];
    tableData: any[];
    emptyMessage?: string;
    showTableCaption?: boolean;
    tableCaption?: string;
    pagination?: boolean;
    serverSidePagination?: boolean;
    totalRecords?: number;
    rowsPerPage?: number;
    showFirstLastIcon?: boolean;
    showGlobalFilter?: boolean;
    tableSizeClass?: string;
    responseLayout?: string;
    responsiveLayoutBreakPoint?: string;
    sortMode?: 'single' | 'multiple';
    emptyMeesageColSpan?: number;
    showCurrentPageReport?: boolean;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    loading?: boolean;
    first?: number;
    orderBy?: Record<string, string>;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    pageLinks?: number;
}
type ShadowTableSelectionMode = 'multiple' | 'single';
type ShadowTableSelectType = 'checkbox' | 'radiobutton' | Nullable;

interface ShadowToolBarStyle {
    textColor?: string;
    backgroundColor?: string;
    buttonBackground?: string;
    buttonTextColor?: string;
}
interface ShadowToolBarItem {
    text?: string;
    icon?: string;
    type?: string;
    action?: string;
}

type ShadowTooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type ShadowTooltipTheme = 'dark' | 'light';
type ShadowTooltipCaretAlignment = 'start' | 'center' | 'end';
type ShadowTooltipEvent = 'hover' | 'click';
type ShadowTooltipType = 'single' | 'multiple';

interface ShadowToolkitSidebarOption {
    width?: string | null;
    height?: string | null;
    closeIconPosition?: string | null;
    closeIcon?: string | null;
    primaryButtonText?: string | null;
    secondaryButtonText?: string | null;
    buttonColor?: string | null;
    useFooterTemplate?: boolean | null;
}

interface ShadowToolkitItem {
    groupName: string;
    items: TooklkitItems[];
}
interface TooklkitItems {
    label: string;
    routerLink: string;
    icon: string;
    selectedIcon: string;
    padding: Number;
}
interface ToolkitStyle {
    iconWidth: Number;
    iconHeight: Number;
    toolkitHeight: string;
}

interface ShadowAccordionProps {
    toggleIconPosition?: ShadowAccordionToggleIconPosition;
    headerStartIcon?: string;
    headerEndIcon?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    onRightSideIconClick?: () => void;
    onClose?: () => void;
    onOpen?: () => void;
    children?: React.ReactNode;
}
declare const ShadowAccordion: ({ toggleIconPosition, headerStartIcon, headerEndIcon, headerTitle, headerSubtitle, onRightSideIconClick, onClose, onOpen, children }: ShadowAccordionProps) => React.JSX.Element;

interface ShadowAvatarProps {
    size?: any;
    type?: ShadowAvatarType;
    grouping?: boolean;
    themeStyle?: ShadowAvatarThemeStyle;
    actionStyle?: string;
    initials?: string;
    shape?: ShadowAvatarShape;
    icon?: string;
    imageUrl?: string;
    avatarGroupData?: ShadowAvatarGroup[];
    hideOverflow?: boolean;
}
declare const ShadowAvatar: ({ size, type, grouping, themeStyle, actionStyle, initials, shape, icon, imageUrl, avatarGroupData, hideOverflow }: ShadowAvatarProps) => React.JSX.Element;

interface ShadowBadgeProps {
    badge: ShadowBadgeItem;
    onClickBadge?: (badge: ShadowBadgeItem) => void;
}
declare const ShadowBadge: ({ badge, onClickBadge }: ShadowBadgeProps) => React.JSX.Element;

interface ShadowBannerProps {
    shadowBanner?: ShadowBannerItem;
    textWrap?: ShadowBannerTextWrap;
    onClickButton?: (output: ShadowClickEventOutput) => void;
    onCloseBanner?: (output: ShadowClickEventOutput) => void;
}
declare const ShadowBanner: ({ shadowBanner, textWrap, onClickButton, onCloseBanner }: ShadowBannerProps) => React.JSX.Element;

interface ShadowBreadcrumbProps {
    breadcrumbStyle?: ShadowBreadcrumbStyle;
    breadcrumbItem?: ShadowBreadcrumbItem[];
    truncation?: 'beginning' | 'middle' | null;
    size?: ShadowBreadcrumbSize;
    menuItems?: ShadowTieredMenuItems[];
    menuOption?: ShadowTieredMenuOption;
    onChangeLabel?: (label: any) => void;
    clickHandler?: (event: ShadowBreadcrumbItem) => void;
}
declare const ShadowBreadcrumb: ({ breadcrumbStyle, breadcrumbItem, truncation: propTruncation, size, menuItems: propMenuItems, menuOption, onChangeLabel, clickHandler }: ShadowBreadcrumbProps) => React.JSX.Element;

interface ShadowButtonProps {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: 'top' | 'bottom' | 'left' | 'right';
    icon?: string;
    buttonType?: string;
    size?: string;
    buttonActionStyle?: string;
    tooltip?: string;
    delay?: number;
    tooltipPosition?: ShadowTooltipPosition;
    tooltipTheme?: ShadowTooltipTheme;
    tooltipEvent?: ShadowTooltipEvent;
    tooltipWidth?: string;
    tooltipType?: ShadowTooltipType;
    tooltipCaretAlignment?: ShadowTooltipCaretAlignment;
    onClick?: (arg: any) => void;
    onButtonClick?: (arg: string) => void;
}
declare const ShadowButton: ({ loading, label, disabled, iconPosition, icon, buttonType, size, buttonActionStyle, tooltip: propTooltip, delay, tooltipPosition, tooltipTheme, tooltipEvent: propTooltipEvent, tooltipType, tooltipCaretAlignment, tooltipWidth, onButtonClick, onClick }: ShadowButtonProps) => React.JSX.Element;

interface ShadowButtonGroupProps {
    buttonGroupData: ShadowButtonGroupItem[];
    buttonsSize?: ShadowButtonSize;
    direction?: ShadowButtonGroupDirection;
    onButtonClick?: (label: string) => void;
    styleClass?: string;
}
declare const ShadowButtonGroup: ({ buttonGroupData, buttonsSize, direction, onButtonClick, styleClass }: ShadowButtonGroupProps) => React.JSX.Element;

interface ShadowCardProps {
    cardOption?: ShadowCardOption;
    menuItem?: ShadowTieredMenuItems[];
    onSelect?: (arg: any) => void;
    onDragStart?: (arg: any) => void;
    onDragEnd?: (arg: any) => void;
    onClickTag?: (arg: any) => void;
    children?: any;
}
declare const ShadowCard: ({ cardOption, menuItem, onSelect, onDragStart, onDragEnd, onClickTag, children }: ShadowCardProps) => React.JSX.Element;

interface ShadowChartProps {
    shadowChartMetaData?: ShadowChartMetaData;
    chartWidth?: string;
    chartHeight?: string;
    displayGridLines?: boolean;
    onUpdateChart?: (arg: any) => void;
}
declare const ShadowChart: ({ shadowChartMetaData, chartWidth, chartHeight, displayGridLines, onUpdateChart }: ShadowChartProps) => React.JSX.Element;

interface ShadowChatBoxProps {
    userIcon?: string;
    userName?: string;
    aiMessageIcon?: string;
    submitButtonIcon?: string;
    chatMessages?: ShadowChatMessage[];
    query?: string;
    showActionBtn?: boolean;
    processingMessage?: string;
    completionMessage?: string;
    showActionDropdown?: boolean;
    actionOptions?: ShadowChatAction[];
    chatInputPlaceholder?: string;
    emptyChatTemplate?: boolean;
    promptList?: ShadowPromptTemplate[];
    chatAiName?: string;
    chatBoxHeader?: ShadowChatBoxHead;
    chatBoxStyle?: ShadowChatBoxStyle;
    emptyChatContent?: ShadowEmptyChat;
    popularDataSkill?: ShadowPopularData;
    savedTemplates?: ShadowSavedTemplate;
    showChat?: boolean;
    aiLoading?: boolean;
    isInputDisabled?: boolean;
    toggleChatUI?: (showChat: boolean) => void;
    onSubmit?: (query: string) => void;
    recomendedPromptHandler?: (event: ShadowRecomendedPrompts) => void;
    closeSideBar?: () => void;
    toggleChat?: (query: string) => void;
    areaActionHandler?: (event: any) => void;
    popularDataClickHandler?: (event: ShadowPopularData) => void;
    handleChatInputChange?: (event: string) => void;
    onActionSelectHandler?: (event: ShadowClickEventOutput) => void;
    onStopGenerateHandler?: (flag: boolean) => void;
}
declare const ShadowChatBox: ({ userIcon, userName, aiMessageIcon, submitButtonIcon, chatMessages, query, showActionBtn, processingMessage, completionMessage, showActionDropdown, actionOptions, chatInputPlaceholder, emptyChatTemplate, promptList, chatAiName, chatBoxHeader, chatBoxStyle, emptyChatContent, popularDataSkill, savedTemplates, showChat, aiLoading, isInputDisabled, toggleChatUI, onSubmit, recomendedPromptHandler, closeSideBar, toggleChat, areaActionHandler, popularDataClickHandler, handleChatInputChange, onActionSelectHandler, onStopGenerateHandler }: ShadowChatBoxProps) => React.JSX.Element;

interface ShadowCheckboxProps {
    checked?: boolean | null;
    label?: string;
    disabled?: boolean;
    styleType?: ShadowCheckboxStyleType;
    type?: ShadowCheckboxType;
    onClick?: (checked: boolean | null) => void;
}
declare const ShadowCheckbox: ({ checked, label, disabled, styleType, type, onClick }: ShadowCheckboxProps) => React.JSX.Element;

interface ShadowChipProps {
    chipList: ShadowChipItem[];
    viewMode?: boolean;
    hideOverflow?: boolean;
    themeStyle?: ShadowChipThemeStyle;
    actionStyle?: ShadowChipActionStyle;
    onRemove?: (chip: ShadowChipItem) => void;
    chipClickHandler?: (event: any) => void;
}
declare const ShadowChip: ({ chipList: propChipList, viewMode, hideOverflow, themeStyle, actionStyle, onRemove, chipClickHandler }: ShadowChipProps) => React.JSX.Element;

interface ShadowDialogProps {
    title?: string;
    subtitle?: string;
    closable?: boolean;
    style?: any;
    breakpoints?: any;
    className?: string;
    display?: boolean;
    headerIcon?: string;
    mode?: ShadowDialogModes;
    header?: boolean;
    footer?: ShadowFooter;
    modal?: boolean;
    closeOnBlur?: boolean;
    height?: string;
    width?: string;
    resizable?: boolean;
    draggable?: boolean;
    allowContentPadding?: boolean;
    position?: string;
    customPosition?: WindowPosition;
    displayChange?: (event: ShadowDialogEvent) => void;
    handleCancel?: (event: ShadowDialogEvent) => void;
    handleOk?: (event: ShadowDialogEvent) => void;
    children?: React.ReactNode;
}
declare const ShadowDialog: ({ title, subtitle, closable, style, breakpoints, className, display, headerIcon, mode, header, footer, modal, closeOnBlur, height, width, resizable, draggable, allowContentPadding, position, customPosition, displayChange, handleCancel, handleOk, children }: ShadowDialogProps) => React.JSX.Element;

interface ShadowDividerProps {
    type?: ShadowDividerType;
    lineStyle?: ShadowDividerLineStyle;
    layout?: ShadowDividerLayout;
    align?: ShadowDividerAlign;
}
declare const ShadowDivider: ({ type, lineStyle, layout, align }: ShadowDividerProps) => React.JSX.Element;

interface ShadowDropboxProps {
    cards?: ShadowDropBoxCardOption[];
    containerClass?: string;
    dragHandler?: (event: ShadowClickEventOutput) => void;
    dragStartHandler?: (event: ShadowClickEventOutput) => void;
    dragOverHandler?: (event: DragEvent) => void;
    menuItem?: ShadowTieredMenuItems[];
    onSelect?: (event: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
    template: (title: any) => void;
}
declare const ShadowDropbox: ({ cards: propCards, containerClass, dragHandler, dragStartHandler, dragOverHandler, menuItem, onSelect, children, template }: ShadowDropboxProps) => React.JSX.Element;

interface ShadowDropdownProps {
    options: ShadowDropdownOption[] | ShadowDropdownGroupOption[];
    group?: boolean;
    placeholder?: string;
    selectedOption?: ShadowDropdownOption | ShadowDropdownGroupOption | null;
    label?: string;
    width?: string;
    filter?: boolean;
    showClear?: boolean;
    editable?: boolean;
    disabled?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    onSelectDropdown?: (option: any) => void;
}
declare const ShadowDropdown: ({ options, group, placeholder, selectedOption, label, width, filter, showClear, editable, disabled, virtualScroll, virtualScrollItemSize, onSelectDropdown }: ShadowDropdownProps) => React.JSX.Element;

interface ShadowInputSwitchProps {
    checked?: boolean | null;
    disabled?: boolean;
    onClick?: (checked: boolean | null) => void;
}
declare const ShadowInputSwitch: ({ checked, disabled, onClick }: ShadowInputSwitchProps) => React.JSX.Element;

interface ShadowMessageProps {
    shadowMessage: ShadowMessageItem;
    onButtonClick?: (label: string) => void;
    onMessageClosed?: (message: ShadowMessageItem) => void;
}
declare const ShadowMessage: ({ shadowMessage, onButtonClick, onMessageClosed }: ShadowMessageProps) => React.JSX.Element;

interface ShadowNotificationsPanelProps {
    title?: string;
    subtitle?: string;
    emptyMessage?: string;
    items?: ShadowNotificationItem[];
    class?: string;
    style?: any;
    height?: string;
    width?: string;
    inlineStyle?: object;
    position?: string;
    display?: boolean;
    resizable?: boolean;
    closable?: boolean;
    customPosition?: WindowPosition;
    tabs?: ShadowTabItem[];
    avatarShape?: ShadowAvatarShape;
    avatarSize?: ShadowAvatarSize;
    notificationPanel?: any;
    activeTabObj?: ShadowTabItem;
    onOkClick?: (item: any) => void;
    onCancelClick?: (item: any) => void;
    onHide?: (event: any) => void;
    onActionSelectHandler?: (event: ShadowClickEventOutput) => void;
    onTabSelectHandler?: (tab: ShadowTabItem) => void;
}
declare const ShadowNotificationsPanel: ({ title, subtitle, emptyMessage, items, class: propClass, style: propStyle, height, width, inlineStyle, position, display, resizable, closable, customPosition, tabs, activeTabObj, onActionSelectHandler, avatarShape, avatarSize, notificationPanel, onOkClick, onTabSelectHandler, onCancelClick, onHide }: ShadowNotificationsPanelProps) => React.JSX.Element;

interface ShadowPopupProps {
    title: string;
    closable?: boolean;
    style?: any;
    breakpoints?: any;
    className?: string;
    mode?: string;
    display?: boolean;
    displayChange?: (e: boolean) => void;
    handleCancel?: (e: boolean) => void;
    handleOk?: (e: boolean) => void;
    children?: React.ReactNode;
}
declare const ShadowPopup: ({ title, closable, style, breakpoints, className, mode, display, displayChange, handleCancel, handleOk, children }: ShadowPopupProps) => React.JSX.Element;

interface ShadowPreviewComponentProps {
    shadowPreview?: ShadowPreview;
    shadowChipList?: ShadowChipItem[];
    hideChipOverflow?: boolean;
    themeStyle?: ShadowChipThemeStyle;
    rightIconClick?: (event: ShadowClickEventOutput) => void;
    menuItemClick?: (event: ShadowClickEventOutput) => void;
    onRemoveChip?: (chip: ShadowChipItem) => void;
    onToggleSwitch?: (event: ShadowClickEventOutput) => void;
    messageButtonClick?: (event: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
    template: any;
}
declare const ShadowPreviewComponent: ({ shadowPreview, shadowChipList, hideChipOverflow, themeStyle, rightIconClick, menuItemClick, onRemoveChip, onToggleSwitch, messageButtonClick, children, template }: ShadowPreviewComponentProps) => React.JSX.Element;

interface ShadowRadioProps {
    shadowRadioData?: ShadowRadio[];
    orientation?: 'vertical' | 'horizontal';
    state?: 'default' | 'error';
    message?: string;
    messageType?: 'helper' | 'error' | 'warning';
    value?: any;
    onButtonClick?: (shadowRadioData: ShadowRadio) => void;
}
declare const ShadowRadioComponent: ({ shadowRadioData: propRadioData, orientation, state, message, messageType, value, onButtonClick }: ShadowRadioProps) => React.JSX.Element;

interface ShadowSideMenuProps {
    width?: string;
    height?: string;
    menuItems?: ShadowMenu[];
    utilityMenus?: ShadowMenu[];
    appLogo?: string;
    closeIcon?: string;
    appLogoSmall?: string;
    appName?: string;
    productName?: string;
    productSubHeading?: string;
    userImage?: string;
    userName?: string;
    userEmail?: string;
    showSearchBox?: boolean;
    notifications?: ShadowNotificationItem[];
    notificationSubtitle?: string;
    showNotifications?: boolean;
    EmptyNotificationMessage?: string;
    tabList?: ShadowTabItem[];
    activeTabValue?: ShadowTabItem;
    notificationWidth?: string;
    toggleMenuEvent?: (state: ShadowMenuState) => void;
    onChangeMenu?: (menu: ShadowMenu) => void;
    onChangeSearch?: (searchText: string) => void;
    onConfirmNotificationClick?: (item: ShadowNotificationItem) => void;
    onCancelNotificationClick?: (item: ShadowNotificationItem) => void;
    onHideNotifications?: (response: any) => void;
    children?: any;
}
declare const ShadowSideMenu: ({ width, height, menuItems, utilityMenus, appLogo, closeIcon, appLogoSmall, productName, productSubHeading, userImage, userName, userEmail, showSearchBox, notifications, notificationSubtitle, showNotifications, EmptyNotificationMessage, tabList, activeTabValue, notificationWidth, toggleMenuEvent, onChangeMenu, onChangeSearch, onConfirmNotificationClick, onCancelNotificationClick, onHideNotifications, children }: ShadowSideMenuProps) => React.JSX.Element;

interface ShadowStepperProps {
    steps: ShadowStep[];
    activeIndex?: number;
    spinner?: boolean;
    readonly?: boolean;
    size?: string;
    type?: 'horizontal' | 'vertical';
    activeIndexChange?: (value: number) => void;
}
declare const ShadowStepper: ({ steps: propSteps, activeIndex: propActiveIndex, type, spinner, readonly, size, activeIndexChange }: ShadowStepperProps) => React.JSX.Element;

interface ShadowTabProps {
    tabs: ShadowTabItem[];
    activeTab?: ShadowTabItem;
    iconSize?: string;
    editType?: 'inline' | 'popup';
    dialogTitle?: string;
    onSelectTab?: (tab: ShadowTabItem) => void;
    onEdit?: (tab: ShadowTabItem) => void;
    onClose?: (tab: ShadowTabItem) => void;
}
declare const ShadowTab: ({ tabs: propTabs, activeTab, iconSize, editType, dialogTitle, onSelectTab, onEdit, onClose }: ShadowTabProps) => React.JSX.Element;

interface ShadowTableProps {
    editMode?: string;
    columnDefs: ColumnMetadata[] | any[];
    tableData: any[];
    emptyMessage?: string;
    showTableCaption?: boolean;
    tableCaption?: string;
    pagination?: boolean;
    serverSidePagination?: boolean;
    totalRecords?: number;
    rowsPerPage?: number;
    showFirstLastIcon?: boolean;
    showGlobalFilter?: boolean;
    tableSizeClass?: string;
    responseLayout?: 'scroll' | 'stack' | undefined;
    responsiveLayoutBreakPoint?: string;
    sortMode?: 'multiple' | 'single' | undefined;
    emptyMeesageColSpan?: number;
    showCurrentPageReport?: boolean;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    loading?: boolean;
    first?: number;
    orderBy?: Record<string, string>;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    pageLinks?: number;
    showStripedRows?: boolean;
    showGridLines?: boolean;
    hideBorder?: boolean;
    selectionMode?: any;
    enableSelection?: boolean;
    selectedRows?: any;
    selectionType?: ShadowTableSelectType;
    showAllSelectCheckbox?: boolean;
    template?: any;
    onPagination?: (tableState: TableState) => void;
    onRowClick?: (event: ShadowClickEventOutput) => void;
    onRowUnClick?: (event: ShadowClickEventOutput) => void;
    selectAllHandler?: (columns: ColumnMetadata[]) => void;
    onChangeEditInputHandler?: (event: ShadowClickEventOutput) => void;
    onCellEditCompleteHandler?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowTable: ({ editMode, columnDefs, tableData, emptyMessage, showTableCaption, tableCaption, pagination, serverSidePagination, totalRecords, rowsPerPage, showFirstLastIcon, showGlobalFilter, tableSizeClass, responseLayout, responsiveLayoutBreakPoint, sortMode, emptyMeesageColSpan: propEmptyMeesageColSpan, showCurrentPageReport, rowsPerPageOptions, currentPageReportTemplate, loading, first, scrollable, scrollHeight, virtualScroll, pageLinks, showStripedRows, showGridLines, hideBorder, selectionMode, enableSelection, selectedRows, selectionType, showAllSelectCheckbox, orderBy, template, onPagination, onRowClick, onRowUnClick, selectAllHandler, onChangeEditInputHandler, onCellEditCompleteHandler }: ShadowTableProps) => React.JSX.Element;

interface ShadowTagProps {
    tag: ShadowTagItem;
    onClickTag?: (tag: any) => void;
}
declare const ShadowTag: ({ tag, onClickTag }: ShadowTagProps) => React.JSX.Element;

interface ShadowTieredMenuProps {
    menuItem: ShadowTieredMenuItems[];
    menuOption?: ShadowTieredMenuOption;
    onSelect?: (menuItem: ShadowTieredMenuItems) => void;
}
declare const ShadowTieredMenu: ({ menuItem, menuOption, onSelect }: ShadowTieredMenuProps) => React.JSX.Element;

interface ShadowToastProps {
    shadowToastData: ShadowToastItem;
    severity?: 'success' | 'warn' | 'error' | 'info';
    display: boolean;
    position?: 'center' | 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | undefined;
    preventOpenDuplicates?: boolean;
    showTransitionOptions?: boolean;
    transitionOptions?: CSSTransitionProps;
    style?: React.CSSProperties;
    styleClass?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: Object;
    displayChange?: (display: boolean) => void;
    onButtonClick?: (shadowToastData: ShadowToastItem) => void;
}
declare const ShadowToast: ({ shadowToastData, severity, display, position, preventOpenDuplicates, showTransitionOptions, style, styleClass, autoZIndex, baseZIndex, breakpoints, displayChange, onButtonClick }: ShadowToastProps) => React.JSX.Element;

interface ShadowToolbarProps {
    toolbarItems?: ShadowToolBarItem[];
    toolbarStyle?: ShadowToolBarStyle;
    toolbarClickHandler?: (arg: ShadowToolBarItem) => void;
}
declare const ShadowToolbar: ({ toolbarItems, toolbarStyle, toolbarClickHandler }: ShadowToolbarProps) => React.JSX.Element | null;

interface ShadowToolkitProps {
    toolkitItems: ShadowToolkitItem[];
    selectedToolKit: string;
    toolkitStyle?: ToolkitStyle;
    selectToolkitHandler?: (arg: string) => void;
    toggleChatUI?: (arg: boolean) => void;
}
declare const ShadowToolkit: ({ toolkitItems, selectedToolKit, toolkitStyle, selectToolkitHandler, toggleChatUI }: ShadowToolkitProps) => React.JSX.Element;

interface ShadowToolkitSidebarProps {
    title: string;
    toolkitSidebarOption?: ShadowToolkitSidebarOption;
    closeSideBar?: () => void;
    primaryButtonAction?: () => void;
    secondaryButtonAction?: () => void;
    customFooter?: React.ReactNode;
    children?: any;
}
declare const ShadowToolkitSidebar: ({ title, toolkitSidebarOption, closeSideBar, primaryButtonAction, secondaryButtonAction, customFooter, children }: ShadowToolkitSidebarProps) => React.JSX.Element;

interface ShadowAreaActionProps {
    areaActionOption?: ShadowAreaActionItem;
    areaActionHandler?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowAreaAction: ({ areaActionOption, areaActionHandler }: ShadowAreaActionProps) => React.JSX.Element;

interface ShadowMultiSelectProps {
    options?: ShadowMultiselectOption[] | ShadowMultiselectGroupOption[];
    group?: boolean;
    placeholder?: string;
    selectedOption?: any;
    label?: string;
    width?: string;
    editable?: boolean;
    disabled?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    onSelectDropdown?: (option: any) => void;
}
declare const ShadowMultiSelect: ({ options, group, placeholder, selectedOption, label, width, editable, disabled, virtualScroll, virtualScrollItemSize, onSelectDropdown }: ShadowMultiSelectProps) => React.JSX.Element;

interface ShadowSelectButtonProps {
    value?: string | number;
    multiple?: boolean;
    iconsOnly?: boolean;
    disabled?: boolean;
    size?: ShadowButtonSize;
    shadowSelectButtonOptions?: ShadowSelectButtonOption[];
    onClick?: (e?: any) => void;
}
declare const ShadowSelectButton: ({ value: propValue, multiple, iconsOnly, disabled, size, shadowSelectButtonOptions, onClick }: ShadowSelectButtonProps) => React.JSX.Element;

interface ShadowPanelProps {
    shadowPanel?: ShadowPanelItem;
    rightIconClick?: (output: ShadowClickEventOutput) => void;
    menuItemClick?: (output: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
}
declare const ShadowPanel: ({ shadowPanel: propShadowPanel, rightIconClick, menuItemClick, children }: ShadowPanelProps) => React.JSX.Element;

interface ShadowOverlayProps {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: ShadowButtonIconPosition;
    icon?: string;
    buttonType?: ShadowButtonType;
    size?: ShadowButtonSize;
    buttonActionStyle?: ShadowButtonActionStyle;
    onButtonClick?: (event: string) => void;
    children?: React.ReactNode;
}
declare const ShadowOverlay: ({ loading, label, disabled, iconPosition, icon, buttonType, size, buttonActionStyle, onButtonClick, children }: ShadowOverlayProps) => React.JSX.Element;

interface ShadowMessageInlineProps {
    message?: string;
    state?: 'success' | 'warning' | 'error' | 'info';
}
declare const ShadowMessageInline: ({ message, state }: ShadowMessageInlineProps) => React.JSX.Element;

interface ShadowInputTextProps {
    type?: string;
    inputValue?: any;
    placeholder?: any;
    disabled?: boolean;
    inputLabel?: string;
    icon?: string | undefined;
    iconPosition?: string;
    size?: ShadowInputTextSize;
    helpText?: string;
    error?: boolean;
    errorMessage?: string;
    mode?: 'decimal' | 'currency' | undefined;
    useGrouping?: boolean;
    currency?: any;
    width?: string;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    suffix?: string;
    prefix?: string;
    onChange?: (value: any) => void;
}
declare const ShadowInputText: ({ type, inputValue: propInputVal, placeholder, disabled, inputLabel, icon, iconPosition: propIconPosition, size, helpText, error, errorMessage, mode, useGrouping, currency, width, minFractionDigits, maxFractionDigits, suffix, prefix, onChange }: ShadowInputTextProps) => React.JSX.Element;

interface ShadowInputTextAreaProps {
    rows?: number;
    cols?: number;
    size?: ShadowInputTextAreaSize;
    header?: string;
    autoResize?: boolean;
    state?: ShadowInputTextAreaState;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onPressEnter?: (value: string) => void;
}
declare const ShadowInputTextArea: ({ rows, cols, size, header, autoResize, state, placeholder, value, disabled, onChange, onPressEnter }: ShadowInputTextAreaProps) => React.JSX.Element;

interface ShadowCalendarProps {
    selectionMode?: ShadowCalendarSelType;
    numberOfMonths?: number;
    style?: string;
    styleClass?: string;
    inputStyle?: string;
    inputStyleClass?: string;
    placeholder?: string;
    disabled?: boolean;
    dateFormat?: string;
    inline?: boolean;
    showIcon?: boolean;
    icon?: string;
    showOnFocus?: boolean;
    showWeek?: boolean;
    panelStyleClass?: string;
    panelStyle?: string;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
    disabledDays?: number[];
    type?: ShadowCalendarType;
    value?: Date | Date[];
    hideOnSelect?: boolean;
    onChange?: (event: any) => void;
    onHide?: (event: any) => void;
    onShow?: (event: any) => void;
}
declare const ShadowCalendar: ({ selectionMode, numberOfMonths, style, styleClass, inputStyle, inputStyleClass, placeholder, disabled, dateFormat: propDateFormat, inline, showIcon, icon, showOnFocus, showWeek, panelStyleClass, panelStyle, minDate, maxDate, disabledDates, disabledDays, type, value: propValue, hideOnSelect, onChange, onHide, onShow }: ShadowCalendarProps) => React.JSX.Element;

interface ShadowInputMaskProps {
    inputValue?: string;
    width?: string;
    template?: boolean;
    format?: string;
    placeholder?: string;
    align?: string;
    options?: ShadowInputMaskItem[];
    selected?: any;
    disabled?: boolean;
    inputLabel?: string;
    mask?: string;
    onChangeHandler?: (value: any) => void;
}
declare const ShadowInputMask: ({ inputValue, width, template, format, placeholder: propPlaceholder, align, options, selected, disabled, inputLabel, mask: propMask, onChangeHandler }: ShadowInputMaskProps) => React.JSX.Element;

interface ShadowInputGroupProps {
    placeholder?: string;
    shadowInputGroup?: ShadowInputGroupItem;
    size?: 'small' | 'medium' | 'large';
    state?: 'error' | 'default';
    showChip?: boolean;
    suggestions?: ShadowInputGroupSuggestion[];
    autoComplete?: boolean;
    chipLabelKey?: string;
    hideChipOverflow?: boolean;
    chipList?: ShadowChipItem[];
    defaultInputOption?: ShadowDropdownOption;
    inputGroupOption?: any;
    showInputGroupOption?: any;
    enableOnEnter?: boolean;
    onDefaultInputSelect?: (option: ShadowDropdownOption) => void;
    onButtonClick?: (value: any) => void;
    onRemoveChip?: (chip: ShadowChipItem) => void;
    autoCompleteChange?: (value: string) => void;
    autoCompleteSelect?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowInputGroup: ({ placeholder, shadowInputGroup, size, state, showChip, suggestions: propSuggestions, autoComplete, chipLabelKey, hideChipOverflow, chipList: propChipList, defaultInputOption, inputGroupOption, showInputGroupOption, enableOnEnter, onDefaultInputSelect, onButtonClick, onRemoveChip, autoCompleteChange, autoCompleteSelect }: ShadowInputGroupProps) => React.JSX.Element;

interface ShadowTrellisChartProps {
    chartMetaData: TrellisChartMetaData;
    chartWidth?: string;
    chartHeight?: string;
}
declare const ShadowTrellisChart: ({ chartMetaData, chartWidth, chartHeight }: ShadowTrellisChartProps) => React.JSX.Element;

interface ShadowTreeProps {
    data?: ShadowTreeNode[];
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    virtualScroll?: boolean;
    virtualNodeHeight?: number;
    scrollHeight?: string;
    filter?: boolean;
    filterMode?: 'lenient' | 'strict' | undefined;
    selection?: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null;
    loading?: boolean;
    onChange?: (data: any) => void;
    onNodeExpand?: (node: ShadowTreeNode) => void;
    onNodeSelect?: (node: ShadowTreeNode) => void;
    onNodeUnselect?: (node: ShadowTreeNode) => void;
}
declare const ShadowTree: ({ data, selectionMode, virtualScroll, virtualNodeHeight, scrollHeight, filter, filterMode, selection, loading, onChange, onNodeExpand, onNodeSelect, onNodeUnselect }: ShadowTreeProps) => React.JSX.Element;

export { type ColumnMetadata, type DialogPosition, type Filter, type FooterTypes, FormatType, type KeyMapper, type Menu, ModeType, type RequestModel, type RequestOptions, type ResponseModel, type SendRequestModel, ShadowAccordion, type ShadowAccordionToggleIconPosition, ShadowAreaAction, type ShadowAreaActionItem, ShadowAvatar, type ShadowAvatarActionStyle, type ShadowAvatarBadgeSeverity, type ShadowAvatarGroup, type ShadowAvatarShape, type ShadowAvatarSize, type ShadowAvatarThemeStyle, type ShadowAvatarType, ShadowBadge, type ShadowBadgeItem, ShadowBanner, type ShadowBannerItem, type ShadowBannerSeverity, type ShadowBannerTextWrap, ShadowBreadcrumb, type ShadowBreadcrumbItem, type ShadowBreadcrumbSize, type ShadowBreadcrumbStyle, type ShadowBreadcrumbTruncation, ShadowButton, type ShadowButtonActionStyle, ShadowButtonGroup, type ShadowButtonGroupDirection, type ShadowButtonGroupItem, type ShadowButtonIconPosition, type ShadowButtonSize, type ShadowButtonType, ShadowCalendar, ShadowCalendarDays, ShadowCalendarFullDays, ShadowCalendarMonths, ShadowCalendarMonthsLabel, type ShadowCalendarSelType, type ShadowCalendarType, ShadowCard, type ShadowCardOption, ShadowChart, type ShadowChartMetaData, type ShadowChatAction, ShadowChatBox, type ShadowChatBoxHead, type ShadowChatBoxStyle, type ShadowChatMessage, ShadowCheckbox, type ShadowCheckboxStyleType, type ShadowCheckboxType, ShadowChip, type ShadowChipActionStyle, type ShadowChipItem, type ShadowChipThemeStyle, type ShadowChipType, type ShadowClickEventOutput, type ShadowDataSkillList, ShadowDialog, ShadowDialogEvent, type ShadowDialogModes, ShadowDivider, type ShadowDividerAlign, type ShadowDividerLayout, type ShadowDividerLineStyle, type ShadowDividerType, type ShadowDropBoxCardOption, ShadowDropbox, ShadowDropdown, type ShadowDropdownGroupOption, type ShadowDropdownOption, type ShadowEmptyChat, type ShadowFooter, type ShadowInlineMessageType, ShadowInputGroup, type ShadowInputGroupItem, type ShadowInputGroupSuggestion, ShadowInputMask, type ShadowInputMaskItem, ShadowInputSwitch, ShadowInputText, ShadowInputTextArea, type ShadowInputTextAreaSize, type ShadowInputTextAreaState, type ShadowInputTextSize, type ShadowMenu, ShadowMenuState, ShadowMessage, ShadowMessageInline, type ShadowMessageItem, ShadowMultiSelect, type ShadowMultiselectGroupOption, type ShadowMultiselectOption, type ShadowNotificationItem, ShadowNotificationsPanel, ShadowOverlay, ShadowPanel, type ShadowPanelItem, type ShadowPopularData, ShadowPopup, type ShadowPreview, ShadowPreviewComponent, type ShadowPreviewPanel, type ShadowPreviewPanelData, type ShadowPromptTemplate, type ShadowRadio, ShadowRadioComponent, type ShadowRecomendedPrompts, type ShadowSalesTreeMetaData, type ShadowSavedTemplate, ShadowSelectButton, type ShadowSelectButtonOption, ShadowSideMenu, type ShadowStep, ShadowStepper, ShadowTab, type ShadowTabItem, ShadowTable, type ShadowTableMetaData, type ShadowTableSelectType, type ShadowTableSelectionMode, ShadowTag, type ShadowTagItem, type ShadowTemplateList, ShadowTieredMenu, type ShadowTieredMenuItems, type ShadowTieredMenuOption, ShadowToast, type ShadowToastItem, type ShadowToolBarItem, type ShadowToolBarStyle, ShadowToolbar, ShadowToolkit, type ShadowToolkitItem, ShadowToolkitSidebar, type ShadowToolkitSidebarOption, type ShadowTooltipCaretAlignment, type ShadowTooltipEvent, type ShadowTooltipPosition, type ShadowTooltipTheme, type ShadowTooltipType, ShadowTree, type ShadowTreeNode, ShadowTrellisChart, type TableState, type TooklkitItems, type ToolkitStyle, type TrellisChartData, type TrellisChartMetaData, type UserProfile, type WindowPosition, type badgeType, type messsageType, type tagType };
