import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  format,
  startOfMonth,
  subMonths,
  parseISO,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onChange: (startDate: string, endDate: string) => void;
  align?: "start" | "center" | "end";
  triggerClassName?: string;
}

export function DateRangePicker({
  startDate,
  endDate,
  onChange,
  align = "end",
  triggerClassName,
}: DateRangePickerProps) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [calendarMonth, setCalendarMonth] = useState<number>(() =>
    new Date().getMonth(),
  );
  const [calendarYear, setCalendarYear] = useState<number>(() =>
    new Date().getFullYear(),
  );

  const handleDateClick = (date: Date) => {
    if (!tempStartDate || (tempStartDate && tempEndDate)) {
      setTempStartDate(date);
      setTempEndDate(null);
    } else {
      if (date < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(date);
      } else {
        setTempEndDate(date);
      }
    }
  };

  const applyCustomDates = () => {
    if (tempStartDate) {
      const newStart = format(tempStartDate, "yyyy-MM-dd");
      const newEnd = tempEndDate
        ? format(tempEndDate, "yyyy-MM-dd")
        : newStart;
      onChange(newStart, newEnd);
    }
    setPickerOpen(false);
  };

  const handlePreset = (presetFn: () => void) => {
    presetFn();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (calendarMonth === 0) {
        setCalendarMonth(11);
        setCalendarYear(calendarYear - 1);
      } else {
        setCalendarMonth(calendarMonth - 1);
      }
    } else {
      if (calendarMonth === 11) {
        setCalendarMonth(0);
        setCalendarYear(calendarYear + 1);
      } else {
        setCalendarMonth(calendarMonth + 1);
      }
    }
  };

  const renderCalendar = (monthOffset: number = 0) => {
    const today = new Date();

    const displayYear =
      monthOffset === 0
        ? calendarYear
        : calendarMonth === 11
          ? calendarYear + 1
          : calendarYear;
    const displayMonth =
      monthOffset === 0
        ? calendarMonth
        : calendarMonth === 11
          ? 0
          : calendarMonth + 1;

    const firstDay = new Date(displayYear, displayMonth, 1);
    const lastDay = new Date(displayYear, displayMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-9" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(displayYear, displayMonth, day);
      const isFirstDay = tempStartDate && isSameDay(date, tempStartDate);
      const isLastDay = tempEndDate && isSameDay(date, tempEndDate);
      const isSelected = isFirstDay || isLastDay;
      const isInRange =
        tempStartDate &&
        tempEndDate &&
        isWithinInterval(date, { start: tempStartDate, end: tempEndDate }) &&
        !isFirstDay &&
        !isLastDay;
      const isHovered =
        hoverDate &&
        tempStartDate &&
        !tempEndDate &&
        isWithinInterval(date, {
          start: tempStartDate < hoverDate ? tempStartDate : hoverDate,
          end: tempStartDate < hoverDate ? hoverDate : tempStartDate,
        });
      const isToday = isSameDay(date, today);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => setHoverDate(date)}
          onMouseLeave={() => setHoverDate(null)}
          className={`
            h-9 w-9 text-sm transition-colors flex items-center justify-center
            ${isFirstDay && !isLastDay ? "rounded-l-full bg-custom-600 text-white font-semibold" : ""}
            ${isLastDay && !isFirstDay ? "rounded-r-full bg-custom-600 text-white font-semibold" : ""}
            ${isFirstDay && isLastDay ? "rounded-full bg-custom-600 text-white font-semibold" : ""}
            ${isInRange || isHovered ? "bg-custom-600 text-white" : ""}
            ${!isSelected && !isInRange && !isHovered ? "rounded hover:bg-gray-100" : ""}
            ${isToday && !isSelected ? "border-2 rounded-full border-custom-600" : ""}
          `}
        >
          {day}
        </button>,
      );
    }

    return (
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          {monthOffset === 0 && (
            <button
              onClick={() => navigateMonth("prev")}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              type="button"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {monthOffset === 1 && <div className="w-7" />}
          <div className="text-center font-semibold text-base">
            {format(firstDay, "MMMM yyyy", { locale: ptBR })}
          </div>
          {monthOffset === 1 && (
            <button
              onClick={() => navigateMonth("next")}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              type="button"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          {monthOffset === 0 && <div className="w-7" />}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-gray-500 text-center font-medium">
          <div>DOM</div>
          <div>SEG</div>
          <div>TER</div>
          <div>QUA</div>
          <div>QUI</div>
          <div>SEX</div>
          <div>SÁB</div>
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  const presets = [
    {
      label: "Hoje",
      fn: () => {
        const d = new Date();
        const formatted = format(d, "yyyy-MM-dd");
        onChange(formatted, formatted);
        setTempStartDate(d);
        setTempEndDate(d);
      },
    },
    {
      label: "Ontem",
      fn: () => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const formatted = format(d, "yyyy-MM-dd");
        onChange(formatted, formatted);
        setTempStartDate(d);
        setTempEndDate(d);
      },
    },
    {
      label: "Últimos 7 dias",
      fn: () => {
        const e = new Date();
        const s = new Date();
        s.setDate(e.getDate() - 6);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Últimos 14 dias",
      fn: () => {
        const e = new Date();
        const s = new Date();
        s.setDate(e.getDate() - 13);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Últimos 30 dias",
      fn: () => {
        const e = new Date();
        const s = new Date();
        s.setDate(e.getDate() - 29);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Este mês",
      fn: () => {
        const e = new Date();
        const s = startOfMonth(e);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Mês passado",
      fn: () => {
        const hoje = new Date();
        const mesPassado = subMonths(hoje, 1);
        const s = startOfMonth(mesPassado);
        const e = new Date(
          mesPassado.getFullYear(),
          mesPassado.getMonth() + 1,
          0,
        );
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Ano",
      fn: () => {
        const e = new Date();
        const s = new Date(e.getFullYear(), 0, 1);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
    {
      label: "Máximo",
      fn: () => {
        const e = new Date();
        const s = new Date(2020, 0, 1);
        onChange(format(s, "yyyy-MM-dd"), format(e, "yyyy-MM-dd"));
        setTempStartDate(s);
        setTempEndDate(e);
      },
    },
  ];

  return (
    <Popover
      open={pickerOpen}
      onOpenChange={(open) => {
        if (open) {
          const s = parseISO(startDate);
          const e = parseISO(endDate);
          setTempStartDate(s);
          setTempEndDate(e);
          setCalendarMonth(s.getMonth());
          setCalendarYear(s.getFullYear());
        }
        setPickerOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          className={
            triggerClassName ||
            "flex items-center justify-center gap-2 bg-custom-600 text-white hover:bg-custom-700"
          }
        >
          <FaCalendarAlt className="h-4 w-4" />
          <span className="text-sm">
            {format(parseISO(startDate), "dd/MM/yy", { locale: ptBR })} →{" "}
            {format(parseISO(endDate), "dd/MM/yy", { locale: ptBR })}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <div className="px-4 py-3 border-b">
          <h3 className="font-semibold text-base">Selecionar Período</h3>
        </div>

        <div className="flex">
          <div className="w-48 border-r">
            <div className="py-2">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePreset(preset.fn)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              {renderCalendar(0)}
              {renderCalendar(1)}
            </div>

            <div className="flex gap-2 px-4 py-3 border-t">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setTempStartDate(null);
                  setTempEndDate(null);
                  setPickerOpen(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-custom-600 hover:bg-custom-700"
                onClick={applyCustomDates}
                disabled={!tempStartDate}
              >
                Atualizar
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
