//simple
var BlankRowSimple = new Array();
BlankRowSimple['is_mobile'] = 'all';
BlankRowSimple['displaypage'] = new Array();
BlankRowSimple['displaypage']['post'] = '1';
BlankRowSimple['displaypage']['page'] = '1';
//BlankRow['displaypage']['home'] = '0';
//BlankRow['displaypage']['archive'] = '0';
//BlankRow['displaypage']['search'] = '0';
BlankRowSimple['top_more_bottom'] = 'bottom';
BlankRowSimple['html'] = '';
BlankRowSimple['priority'] = 11;

function RetRowHtmlSimple(num,data){
    var RowHtml = '';
    RowHtml += '<tr class="row' + num + '">';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_is_mobile_simple">';
    RowHtml += '            <OPTION value="all" class="select_is_mobile_all"' + ( data['is_mobile']=='all' ? ' selected="selected"' : '' ) + '>all</OPTION>';
    RowHtml += '            <OPTION value="pc" class="select_is_mobile_pc"' + ( data['is_mobile']=='pc' ? ' selected="selected"' : '' ) + '>PC</OPTION>';
    RowHtml += '            <OPTION value="mobile" class="select_is_mobile_mobile"' + ( data['is_mobile']=='mobile' ? ' selected="selected"' : '' ) + '>mobile</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_post_simple" value="1" id="row' + num + '_post_simple"' + ( data['displaypage']['post']=='1' ? ' checked="checked"' : '' ) + '>';
    RowHtml += '        <label for="row' + num + '_post_simple" class="label_of_post">単一投稿</label><br />';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_page_simple" value="1" id="row' + num + '_page_simple"' + ( data['displaypage']['page']=='1' ? ' checked="checked"' : '' ) + '>';
    RowHtml += '        <label for="row' + num + '_page_simple" class="label_of_page">単一ページ</label><br />';
/*
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_home" value="1" id="row' + num + '_home"' + ( data['displaypage']['home']=='1' ? ' checked="checked"' : '' ) + '>';
    RowHtml += '        <label for="row' + num + '_home" class="label_of_home">home</label><br />';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_archive" value="1" id="row' + num + '_archive"' + ( data['displaypage']['archive']=='1' ? ' checked="checked"' : '' ) + '>';
    RowHtml += '        <label for="row' + num + '_archive" class="label_of_archive">archive</label><br />';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_search" value="1" id="row' + num + '_search"' + ( data['displaypage']['search']=='1' ? ' checked="checked"' : '' ) + '>';
    RowHtml += '        <label for="row' + num + '_search" class="label_of_search">search</label><br />';
 */
    RowHtml += '    </td>';
    RowHtml += '    <td style="display:none;">';    //本文のみ
    RowHtml += '        <SELECT name="row' + num + '_title_content_simple">';
    RowHtml += '            <OPTION value="title" class="select_tc_title">title</OPTION>';
    RowHtml += '            <OPTION value="content" class="select_tc_content" selected="selected">content</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_top_more_bottom_simple">';
    RowHtml += '            <OPTION value="top" class="select_tbm_upper"' + ( data['top_more_bottom']=='top' ? ' selected="selected"' : '' ) + '>top</OPTION>';
    RowHtml += '            <OPTION value="more" class="select_tbm_more"' + ( data['top_more_bottom']=='more' ? ' selected="selected"' : '' ) + '>&lt;!-- more --&gt;</OPTION>';
    RowHtml += '            <OPTION value="bottom" class="select_tbm_lower"' + ( data['top_more_bottom']=='bottom' ? ' selected="selected"' : '' ) + '>bottom</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_priority_simple">';
    RowHtml += '            <OPTION value="10"' + ( data['priority']==10 ? ' selected="selected"' : '' ) + '>10</OPTION>';
    RowHtml += '            <OPTION value="11"' + ( data['priority']==11 ? ' selected="selected"' : '' ) + '>11</OPTION>';
    RowHtml += '            <OPTION value="12"' + ( data['priority']==12 ? ' selected="selected"' : '' ) + '>12</OPTION>';
    RowHtml += '            <OPTION value="13"' + ( data['priority']==13 ? ' selected="selected"' : '' ) + '>13</OPTION>';
    RowHtml += '            <OPTION value="14"' + ( data['priority']==14 ? ' selected="selected"' : '' ) + '>14</OPTION>';
    RowHtml += '            <OPTION value="15"' + ( data['priority']==15 ? ' selected="selected"' : '' ) + '>15</OPTION>';
    RowHtml += '            <OPTION value="16"' + ( data['priority']==16 ? ' selected="selected"' : '' ) + '>16</OPTION>';
    RowHtml += '            <OPTION value="17"' + ( data['priority']==17 ? ' selected="selected"' : '' ) + '>17</OPTION>';
    RowHtml += '            <OPTION value="18"' + ( data['priority']==18 ? ' selected="selected"' : '' ) + '>18</OPTION>';
    RowHtml += '            <OPTION value="19"' + ( data['priority']==19 ? ' selected="selected"' : '' ) + '>19</OPTION>';
    RowHtml += '            <OPTION value="20"' + ( data['priority']==20 ? ' selected="selected"' : '' ) + '>20</OPTION>';
    RowHtml += '            <OPTION value="100"' + ( data['priority']==100 ? ' selected="selected"' : '' ) + '>100</OPTION>';
    RowHtml += '            <OPTION value="200"' + ( data['priority']==200 ? ' selected="selected"' : '' ) + '>200</OPTION>';
    RowHtml += '            <OPTION value="300"' + ( data['priority']==300 ? ' selected="selected"' : '' ) + '>300</OPTION>';
    RowHtml += '            <OPTION value="400"' + ( data['priority']==400 ? ' selected="selected"' : '' ) + '>400</OPTION>';
    RowHtml += '            <OPTION value="500"' + ( data['priority']==500 ? ' selected="selected"' : '' ) + '>500</OPTION>';
    RowHtml += '            <OPTION value="1000"' + ( data['priority']==1000 ? ' selected="selected"' : '' ) + '>1000</OPTION>';
    RowHtml += '            <OPTION value="10000"' + ( data['priority']==10000 ? ' selected="selected"' : '' ) + '>10000</OPTION>';
    RowHtml += '            <OPTION value="100000"' + ( data['priority']==100000 ? ' selected="selected"' : '' ) + '>100000</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <textarea type="textarea" cols="60" rows="10" name="row' + num + '_html_simple">' + data['html'] + '</textarea>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <input type="checkbox" name="row' + num + '_delete_simple" id="row' + num + '_delete_simple" value="1">';
    RowHtml += '        <label for="row' + num + '_delete_simple" class="del_label">削除</label><br />';
    RowHtml += '    </td>';
    RowHtml += '</tr>';
    return(RowHtml);
}

//AB
var BlankRowAB = new Array();
BlankRowAB['is_mobile'] = 'all';
BlankRowAB['displaypage'] = new Array();
BlankRowAB['displaypage']['post'] = '1';
BlankRowAB['displaypage']['page'] = '1';
//BlankRow['displaypage']['home'] = '0';
//BlankRow['displaypage']['archive'] = '0';
//BlankRow['displaypage']['search'] = '0';
BlankRowAB['top_more_bottom'] = 'bottom';
BlankRowAB['html_a'] = '';
BlankRowAB['html_b'] = '';
BlankRowAB['ratio_a'] = '1';
BlankRowAB['ratio_b'] = '1';
BlankRowAB['priority'] = 11;

function RetRowHtmlAB(num,data){
    var RowHtml = '';
    RowHtml += '<tr class="row' + num + '">';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_is_mobile_ab">';
    RowHtml += '            <OPTION value="all" class="select_is_mobile_all"' + ( data['is_mobile']=='all' ? ' selected="selected"' : '' ) + '>all</OPTION>';
    RowHtml += '            <OPTION value="pc" class="select_is_mobile_pc"' + ( data['is_mobile']=='pc' ? ' selected="selected"' : '' ) + '>PC</OPTION>';
    RowHtml += '            <OPTION value="mobile" class="select_is_mobile_mobile"' + ( data['is_mobile']=='mobile' ? ' selected="selected"' : '' ) + '>mobile</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_post_ab" value="1" id="row' + num + '_post_ab"' + ( data['displaypage']['post']=='1' ? ' checked="checked"' : '' ) + '>';
//    RowHtml += '        <label for="row' + num + '_post" class="label_of_post">単一投稿</label><br />';
    RowHtml += '        <label for="row' + num + '_post_ab" class="label_of_post">単一投稿</label><br />';
    RowHtml += '        <input type="checkbox" name="row' + num + '_disp_page_ab" value="1" id="row' + num + '_page_ab"' + ( data['displaypage']['page']=='1' ? ' checked="checked"' : '' ) + '>';
//    RowHtml += '        <label for="row' + num + '_disp_page_ab" class="label_of_page">単一ページ</label><br />';
    RowHtml += '        <label for="row' + num + '_page_ab" class="label_of_page">単一ページ</label><br />';
    RowHtml += '    </td>';
    RowHtml += '    <td style="display:none;">';    //本文のみ
    RowHtml += '        <SELECT name="row' + num + '_title_content_ab">';
    RowHtml += '            <OPTION value="title" class="select_tc_title">title</OPTION>';
    RowHtml += '            <OPTION value="content" class="select_tc_content" selected="selected">content</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_top_more_bottom_ab">';
    RowHtml += '            <OPTION value="top" class="select_tbm_upper"' + ( data['top_more_bottom']=='top' ? ' selected="selected"' : '' ) + '>top</OPTION>';
    RowHtml += '            <OPTION value="more" class="select_tbm_more"' + ( data['top_more_bottom']=='more' ? ' selected="selected"' : '' ) + '>&lt;!-- more --&gt;</OPTION>';
    RowHtml += '            <OPTION value="bottom" class="select_tbm_lower"' + ( data['top_more_bottom']=='bottom' ? ' selected="selected"' : '' ) + '>bottom</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <SELECT name="row' + num + '_priority_ab">';
    RowHtml += '            <OPTION value="10"' + ( data['priority']==10 ? ' selected="selected"' : '' ) + '>10</OPTION>';
    RowHtml += '            <OPTION value="11"' + ( data['priority']==11 ? ' selected="selected"' : '' ) + '>11</OPTION>';
    RowHtml += '            <OPTION value="12"' + ( data['priority']==12 ? ' selected="selected"' : '' ) + '>12</OPTION>';
    RowHtml += '            <OPTION value="13"' + ( data['priority']==13 ? ' selected="selected"' : '' ) + '>13</OPTION>';
    RowHtml += '            <OPTION value="14"' + ( data['priority']==14 ? ' selected="selected"' : '' ) + '>14</OPTION>';
    RowHtml += '            <OPTION value="15"' + ( data['priority']==15 ? ' selected="selected"' : '' ) + '>15</OPTION>';
    RowHtml += '            <OPTION value="16"' + ( data['priority']==16 ? ' selected="selected"' : '' ) + '>16</OPTION>';
    RowHtml += '            <OPTION value="17"' + ( data['priority']==17 ? ' selected="selected"' : '' ) + '>17</OPTION>';
    RowHtml += '            <OPTION value="18"' + ( data['priority']==18 ? ' selected="selected"' : '' ) + '>18</OPTION>';
    RowHtml += '            <OPTION value="19"' + ( data['priority']==19 ? ' selected="selected"' : '' ) + '>19</OPTION>';
    RowHtml += '            <OPTION value="20"' + ( data['priority']==20 ? ' selected="selected"' : '' ) + '>20</OPTION>';
    RowHtml += '            <OPTION value="100"' + ( data['priority']==100 ? ' selected="selected"' : '' ) + '>100</OPTION>';
    RowHtml += '            <OPTION value="200"' + ( data['priority']==200 ? ' selected="selected"' : '' ) + '>200</OPTION>';
    RowHtml += '            <OPTION value="300"' + ( data['priority']==300 ? ' selected="selected"' : '' ) + '>300</OPTION>';
    RowHtml += '            <OPTION value="400"' + ( data['priority']==400 ? ' selected="selected"' : '' ) + '>400</OPTION>';
    RowHtml += '            <OPTION value="500"' + ( data['priority']==500 ? ' selected="selected"' : '' ) + '>500</OPTION>';
    RowHtml += '            <OPTION value="1000"' + ( data['priority']==1000 ? ' selected="selected"' : '' ) + '>1000</OPTION>';
    RowHtml += '            <OPTION value="10000"' + ( data['priority']==10000 ? ' selected="selected"' : '' ) + '>10000</OPTION>';
    RowHtml += '            <OPTION value="100000"' + ( data['priority']==100000 ? ' selected="selected"' : '' ) + '>100000</OPTION>';
    RowHtml += '        </SELECT>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <div style="float:left">';
    RowHtml += '            Pattern A<br />';
    RowHtml += '            <textarea type="textarea" cols="30" rows="10" name="row' + num + '_html_ab_a">' + data['html_a'] + '</textarea><br />';
    RowHtml += '            <span class="ratio"></span>：<input class="positive-integer" type="text" size="5" name="row' + num + '_ratio_ab_a" value="' + data['ratio_a'] + '">';
    RowHtml += '        </div>';
    RowHtml += '        <div style="float:left">';
    RowHtml += '            Pattern B<br />';
    RowHtml += '            <textarea type="textarea" cols="30" rows="10" name="row' + num + '_html_ab_b">' + data['html_b'] + '</textarea><br />';
    RowHtml += '            <span class="ratio"></span>：<input class="positive-integer" type="text" size="5" name="row' + num + '_ratio_ab_b" value="' + data['ratio_b'] + '">';
    RowHtml += '        </div>';
    RowHtml += '        <div style="clear:both;"></div>';
    RowHtml += '    </td>';
    RowHtml += '    <td>';
    RowHtml += '        <input type="checkbox" name="row' + num + '_delete_ab" id="row' + num + '_delete_ab" value="1">';
    RowHtml += '        <label for="row' + num + '_delete_ab" class="del_label">削除</label><br />';
    RowHtml += '    </td>';
    RowHtml += '</tr>';
    return(RowHtml);
}