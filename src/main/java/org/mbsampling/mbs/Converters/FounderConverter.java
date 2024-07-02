package org.mbsampling.mbs.Converters;

import jakarta.persistence.AttributeConverter;

import java.util.List;

public class FounderConverter implements AttributeConverter<List<String>, String> {
    @Override
    public String convertToDatabaseColumn(List<String> strings) {
        if (strings == null || strings.isEmpty()) return null;

        StringBuilder returnValue = new StringBuilder();

        for (String string : strings) {
            returnValue.append(string);
        }

        returnValue.deleteCharAt(returnValue.length() - 1);

        return returnValue.toString();
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        return List.of(s.split(","));
    }
}
