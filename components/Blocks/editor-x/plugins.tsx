import { useState } from "react";
import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  MULTILINE_ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";

import { Separator } from "@/components/ui/separator";
import { ToolbarPlugin } from "@/components/Editor/plugins/toolbar/toolbar-plugin";
import { HistoryToolbarPlugin } from "@/components/Editor/plugins/toolbar/history-toolbar-plugin";
import { BlockFormatDropDown } from "@/components/Editor/plugins/toolbar/block-format-toolbar-plugin";
import { FormatParagraph } from "@/components/Editor/plugins/toolbar/block-format/format-paragraph";
import { FormatHeading } from "@/components/Editor/plugins/toolbar/block-format/format-heading";
import { FormatNumberedList } from "@/components/Editor/plugins/toolbar/block-format/format-numbered-list";
import { FormatBulletedList } from "@/components/Editor/plugins/toolbar/block-format/format-bulleted-list";
import { FormatCheckList } from "@/components/Editor/plugins/toolbar/block-format/format-check-list";
import { FormatCodeBlock } from "@/components/Editor/plugins/toolbar/block-format/format-code-block";
import { FormatQuote } from "@/components/Editor/plugins/toolbar/block-format/format-quote";
import { CodeLanguageToolbarPlugin } from "@/components/Editor/plugins/toolbar/code-language-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "@/components/Editor/plugins/toolbar/font-family-toolbar-plugin";
import { FontSizeToolbarPlugin } from "@/components/Editor/plugins/toolbar/font-size-toolbar-plugin";
import { FontFormatToolbarPlugin } from "@/components/Editor/plugins/toolbar/font-format-toolbar-plugin";
import { SubSuperToolbarPlugin } from "@/components/Editor/plugins/toolbar/subsuper-toolbar-plugin";
import { LinkToolbarPlugin } from "@/components/Editor/plugins/toolbar/link-toolbar-plugin";
import { ClearFormattingToolbarPlugin } from "@/components/Editor/plugins/toolbar/clear-formatting-toolbar-plugin";
import { FontColorToolbarPlugin } from "@/components/Editor/plugins/toolbar/font-color-toolbar-plugin";
import { FontBackgroundToolbarPlugin } from "@/components/Editor/plugins/toolbar/font-background-toolbar-plugin";
import { ElementFormatToolbarPlugin } from "@/components/Editor/plugins/toolbar/element-format-toolbar-plugin";
import { BlockInsertPlugin } from "@/components/Editor/plugins/toolbar/block-insert-plugin";
import { InsertHorizontalRule } from "@/components/Editor/plugins/toolbar/block-insert/insert-horizontal-rule";
import { ActionsPlugin } from "@/components/Editor/plugins/actions/actions-plugin";
import { ClearEditorActionPlugin } from "@/components/Editor/plugins/actions/clear-editor-plugin";
import { CounterCharacterPlugin } from "@/components/Editor/plugins/actions/counter-character-plugin";
import { EditModeTogglePlugin } from "@/components/Editor/plugins/actions/edit-mode-toggle-plugin";
import { ImportExportPlugin } from "@/components/Editor/plugins/actions/import-export-plugin";
import { MarkdownTogglePlugin } from "@/components/Editor/plugins/actions/markdown-toggle-plugin";
import { MaxLengthPlugin } from "@/components/Editor/plugins/actions/max-length-plugin";
import { ShareContentPlugin } from "@/components/Editor/plugins/actions/share-content-plugin";
import { TreeViewPlugin } from "@/components/Editor/plugins/actions/tree-view-plugin";
import { AutocompletePlugin } from "@/components/Editor/plugins/autocomplete-plugin";
import { CodeActionMenuPlugin } from "@/components/Editor/plugins/code-action-menu-plugin";
import { CodeHighlightPlugin } from "@/components/Editor/plugins/code-highlight-plugin";
import { ComponentPickerMenuPlugin } from "@/components/Editor/plugins/component-picker-menu-plugin";
import { ContextMenuPlugin } from "@/components/Editor/plugins/context-menu-plugin";
import { DragDropPastePlugin } from "@/components/Editor/plugins/drag-drop-paste-plugin";
import { DraggableBlockPlugin } from "@/components/Editor/plugins/draggable-block-plugin";
import { AutoEmbedPlugin } from "@/components/Editor/plugins/embeds/auto-embed-plugin";
import { TwitterPlugin } from "@/components/Editor/plugins/embeds/twitter-plugin";
import { YouTubePlugin } from "@/components/Editor/plugins/embeds/youtube-plugin";
import { EmojiPickerPlugin } from "@/components/Editor/plugins/emoji-picker-plugin";
import { EmojisPlugin } from "@/components/Editor/plugins/emojis-plugin";
import { FloatingLinkEditorPlugin } from "@/components/Editor/plugins/floating-link-editor-plugin";
import { FloatingTextFormatToolbarPlugin } from "@/components/Editor/plugins/floating-text-format-plugin";
import { ImagesPlugin } from "@/components/Editor/plugins/images-plugin";
import { KeywordsPlugin } from "@/components/Editor/plugins/keywords-plugin";
import { LayoutPlugin } from "@/components/Editor/plugins/layout-plugin";
import { ListMaxIndentLevelPlugin } from "@/components/Editor/plugins/list-max-indent-level-plugin";
import { MentionsPlugin } from "@/components/Editor/plugins/mentions-plugin";
import { AlignmentPickerPlugin } from "@/components/Editor/plugins/picker/alignment-picker-plugin";
import { BulletedListPickerPlugin } from "@/components/Editor/plugins/picker/bulleted-list-picker-plugin";
import { CheckListPickerPlugin } from "@/components/Editor/plugins/picker/check-list-picker-plugin";
import { CodePickerPlugin } from "@/components/Editor/plugins/picker/code-picker-plugin";
import { ColumnsLayoutPickerPlugin } from "@/components/Editor/plugins/picker/columns-layout-picker-plugin";
import { DividerPickerPlugin } from "@/components/Editor/plugins/picker/divider-picker-plugin";
import { EmbedsPickerPlugin } from "@/components/Editor/plugins/picker/embeds-picker-plugin";
import { HeadingPickerPlugin } from "@/components/Editor/plugins/picker/heading-picker-plugin";
import { ImagePickerPlugin } from "@/components/Editor/plugins/picker/image-picker-plugin";
import { NumberedListPickerPlugin } from "@/components/Editor/plugins/picker/numbered-list-picker-plugin";
import { ParagraphPickerPlugin } from "@/components/Editor/plugins/picker/paragraph-picker-plugin";
import { QuotePickerPlugin } from "@/components/Editor/plugins/picker/quote-picker-plugin";
import {
  TablePickerPlugin,
  DynamicTablePickerPlugin,
} from "@/components/Editor/plugins/picker/table-picker-plugin";
import { TabFocusPlugin } from "@/components/Editor/plugins/tab-focus-plugin";
import { InsertColumnsLayout } from "@/components/Editor/plugins/toolbar/block-insert/insert-columns-layout";
import { InsertEmbeds } from "@/components/Editor/plugins/toolbar/block-insert/insert-embeds";
import { InsertImage } from "@/components/Editor/plugins/toolbar/block-insert/insert-image";
import { InsertTable } from "@/components/Editor/plugins/toolbar/block-insert/insert-table";
import { TypingPerfPlugin } from "@/components/Editor/plugins/typing-pref-plugin";
import { EMOJI } from "@/components/Editor/transformers/markdown-emoji-transformer";
import { HR } from "@/components/Editor/transformers/markdown-hr-transformer";
import { IMAGE } from "@/components/Editor/transformers/markdown-image-transformer";
import { TABLE } from "@/components/Editor/transformers/markdown-table-transformer";
import { TWEET } from "@/components/Editor/transformers/markdown-tweet-transformer";
import { AutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
import { CharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ContentEditable } from "@/components/Editor/editor-ui/content-editable";

const placeholder = "Press / for commands...";
const maxLength = 500;

export function Plugins({}) {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className="relative">
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex items-center gap-2 overflow-auto border-b p-1">
            <HistoryToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <BlockFormatDropDown>
              <FormatParagraph />
              <FormatHeading levels={["h1", "h2", "h3"]} />
              <FormatNumberedList />
              <FormatBulletedList />
              <FormatCheckList />
              <FormatCodeBlock />
              <FormatQuote />
            </BlockFormatDropDown>
            {blockType === "code" ? (
              <CodeLanguageToolbarPlugin />
            ) : (
              <>
                <FontFamilyToolbarPlugin />
                <FontSizeToolbarPlugin />
                <Separator orientation="vertical" className="!h-7" />
                <FontFormatToolbarPlugin format="bold" />
                <FontFormatToolbarPlugin format="italic" />
                <FontFormatToolbarPlugin format="underline" />
                <FontFormatToolbarPlugin format="strikethrough" />
                <Separator orientation="vertical" className="!h-7" />
                <SubSuperToolbarPlugin />
                <LinkToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
                <Separator orientation="vertical" className="!h-7" />
                <ClearFormattingToolbarPlugin />
                <Separator orientation="vertical" className="!h-7" />
                <FontColorToolbarPlugin />
                <FontBackgroundToolbarPlugin />
                <Separator orientation="vertical" className="!h-7" />
                <ElementFormatToolbarPlugin />
                <Separator orientation="vertical" className="!h-7" />
                <BlockInsertPlugin>
                  <InsertHorizontalRule />
                  <InsertImage />
                  <InsertTable />
                  <InsertColumnsLayout />
                  <InsertEmbeds />
                </BlockInsertPlugin>
              </>
            )}
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <AutoFocusPlugin />
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-[calc(100vh-570px)] min-h-full overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />

        <ClickableLinkPlugin />
        <CheckListPlugin />
        <HorizontalRulePlugin />
        <TablePlugin />
        <ListPlugin />
        <TabIndentationPlugin />
        <HashtagPlugin />
        <HistoryPlugin />

        <MentionsPlugin />
        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
        <KeywordsPlugin />
        <EmojisPlugin />
        <ImagesPlugin />

        <LayoutPlugin />

        <AutoEmbedPlugin />
        <TwitterPlugin />
        <YouTubePlugin />

        <CodeHighlightPlugin />
        <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />

        <MarkdownShortcutPlugin
          transformers={[
            TABLE,
            HR,
            IMAGE,
            EMOJI,
            TWEET,
            CHECK_LIST,
            ...ELEMENT_TRANSFORMERS,
            ...MULTILINE_ELEMENT_TRANSFORMERS,
            ...TEXT_FORMAT_TRANSFORMERS,
            ...TEXT_MATCH_TRANSFORMERS,
          ]}
        />
        <TypingPerfPlugin />
        <TabFocusPlugin />
        <AutocompletePlugin />
        <AutoLinkPlugin matchers={[]} />
        <LinkPlugin />

        <ComponentPickerMenuPlugin
          baseOptions={[
            ParagraphPickerPlugin(),
            HeadingPickerPlugin({ n: 1 }),
            HeadingPickerPlugin({ n: 2 }),
            HeadingPickerPlugin({ n: 3 }),
            TablePickerPlugin(),
            CheckListPickerPlugin(),
            NumberedListPickerPlugin(),
            BulletedListPickerPlugin(),
            QuotePickerPlugin(),
            CodePickerPlugin(),
            DividerPickerPlugin(),
            EmbedsPickerPlugin({ embed: "tweet" }),
            EmbedsPickerPlugin({ embed: "youtube-video" }),
            ImagePickerPlugin(),
            ColumnsLayoutPickerPlugin(),
            AlignmentPickerPlugin({ alignment: "left" }),
            AlignmentPickerPlugin({ alignment: "center" }),
            AlignmentPickerPlugin({ alignment: "right" }),
            AlignmentPickerPlugin({ alignment: "justify" }),
          ]}
          dynamicOptionsFn={DynamicTablePickerPlugin}
        />

        <ContextMenuPlugin />
        <DragDropPastePlugin />
        <EmojiPickerPlugin />

        <FloatingLinkEditorPlugin
          anchorElem={floatingAnchorElem}
          isLinkEditMode={isLinkEditMode}
          setIsLinkEditMode={setIsLinkEditMode}
        />
        <FloatingTextFormatToolbarPlugin
          anchorElem={floatingAnchorElem}
          setIsLinkEditMode={setIsLinkEditMode}
        />

        <ListMaxIndentLevelPlugin />
      </div>
      <ActionsPlugin>
        <div className="clear-both flex items-center justify-between gap-2 overflow-auto border-t p-1">
          <div className="flex flex-1 justify-start">
            <MaxLengthPlugin maxLength={maxLength} />
            <CharacterLimitPlugin maxLength={maxLength} charset="UTF-16" />
          </div>
          <div>
            <CounterCharacterPlugin charset="UTF-16" />
          </div>
          <div className="flex flex-1 justify-end">
            <ShareContentPlugin />
            <ImportExportPlugin />
            <MarkdownTogglePlugin
              shouldPreserveNewLinesInMarkdown={true}
              transformers={[
                TABLE,
                HR,
                IMAGE,
                EMOJI,
                TWEET,
                CHECK_LIST,
                ...ELEMENT_TRANSFORMERS,
                ...MULTILINE_ELEMENT_TRANSFORMERS,
                ...TEXT_FORMAT_TRANSFORMERS,
                ...TEXT_MATCH_TRANSFORMERS,
              ]}
            />
            <EditModeTogglePlugin />
            <>
              <ClearEditorActionPlugin />
              <ClearEditorPlugin />
            </>
            <TreeViewPlugin />
          </div>
        </div>
      </ActionsPlugin>
    </div>
  );
}
