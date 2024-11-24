import { VStack, Input, Button, Select, HStack } from "@chakra-ui/react";
import { useState } from "react";

const AddText = ({
  content,
  onContentChange,
  onAddContent,
  onDeleteContent,
}) => {
  const [selectedType, setSelectedType] = useState("Text"); // Track the selected content type

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddContent = () => {
    onAddContent(selectedType);
  };

  return (
    <VStack spacing={4}>
      {content.map((item, index) => {
        if (item.type === "Text") {
          return (
            <VStack key={index} spacing={4}>
              <Input
                placeholder="Content Text"
                value={item.text}
                onChange={(event) => onContentChange(index, event, "text")}
              />
              {/* Delete button */}
              <Button colorScheme="red" onClick={() => onDeleteContent(index)}>
                Delete
              </Button>
            </VStack>
          );
        }
        if (item.type === "Image") {
          return (
            <VStack key={index} spacing={2}>
              <Input
                placeholder="Image URL"
                value={item.imageUrl}
                onChange={(event) => onContentChange(index, event, "imageUrl")}
              />
              <Input
                placeholder="Alt Text"
                value={item.altText}
                onChange={(event) => onContentChange(index, event, "altText")}
              />
              <Button colorScheme="red" onClick={() => onDeleteContent(index)}>
                Delete
              </Button>
            </VStack>
          );
        }
        if (item.type === "TextAndImage") {
          return (
            <VStack key={index} spacing={2}>
              <Input
                placeholder="Content Text"
                value={item.text}
                onChange={(event) => onContentChange(index, event, "text")}
              />
              <Input
                placeholder="Image URL"
                value={item.imageUrl}
                onChange={(event) => onContentChange(index, event, "imageUrl")}
              />
              <Input
                placeholder="Alt Text"
                value={item.altText}
                onChange={(event) => onContentChange(index, event, "altText")}
              />
              <Button colorScheme="red" onClick={() => onDeleteContent(index)}>
                Delete
              </Button>
            </VStack>
          );
        }
        return null;
      })}

      {/* Dropdown to select the type */}
      <Select
        placeholder="Select Content Type"
        value={selectedType}
        onChange={handleTypeChange}
      >
        <option value="Text">Text</option>
        <option value="Image">Image</option>
        <option value="TextAndImage">Text and Image</option>
      </Select>

      {/* Add Button */}
      <Button colorScheme="blue" onClick={handleAddContent}>
        Add Content
      </Button>
    </VStack>
  );
};

export default AddText;
